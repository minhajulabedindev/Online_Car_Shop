import React, { useEffect, useState } from "react";
import { Button, Container, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Navigation.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import Category from "../../Category/Category";
import useAuth from "../../Hooks/useAuth";

// const hardIcon = <FontAwesomeIcon icon={faLocationArrow} />;

const Navigation = ({ item }) => {
  const { user, admin, logOut } = useAuth();
  console.log(user.displayName);
  console.log(user.email);
  const [products, setProducts] = useState([]);
  console.log(products);

  useEffect(() => {
    fetch("https://afternoon-scrubland-76608.herokuapp.com/card")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);
  const UsersProduct = products.filter((product) => product.email === user.email);
  return (
    <div className="text-white " style={{ position: "relative" }}>
      <Navbar bg="black" variant="dark" expand="lg">
        {/* className={({ isActive }) => (isActive ? "text-" : "text-white  hover")} */}
        <Container>
          <Nav.Link className={(navinfo) => (navinfo.isActive ? "text-light" : "text-white  hover")} as={Link} to="/home">
            Home
          </Nav.Link>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
              <Nav.Link className="hover text-white " as={Link} to="/shop">
                Shop
              </Nav.Link>
              <Nav.Link className="dropdown " as={Link} to="/home">
                <div className="dropbtn text-white ">Category</div>
                <div className="dropdown-content">
                  <Category></Category>
                </div>
              </Nav.Link>
              <Nav.Link className="hover text-white " as={Link} to="/about">
                About
              </Nav.Link>
              {admin ? (
                <Nav.Link className="hover text-white " as={Link} to="/dashboard">
                  Dashboard
                </Nav.Link>
              ) : (
                ""
              )}
            </Nav>

            {user.email ? (
              <NavDropdown className=" " title={user.displayName} id="navbarScrollingDropdown">
                <div className="text-center p-3 ">
                  {" "}
                  <img className="rounded-circle w-50 " src={user.photoURL} alt=""></img>
                  <div to="#action4">{user.displayName}</div>
                  <div className="text-start ">
                    <p to="#action5">{user.email}</p>
                    <div>
                      <NavDropdown title="Sign In And Login History" id="navbarScrollingDropdown">
                        <div className="p-2">
                          <div to="#action4">
                            {" "}
                            <h6>Creation Time</h6>
                            {user.metadata.creationTime}
                          </div>{" "}
                          <hr></hr>
                          <div to="#action4">
                            {" "}
                            <h6>Last SignIn Time</h6>
                            {user.metadata.lastSignInTime}
                          </div>
                        </div>
                      </NavDropdown>
                    </div>
                  </div>
                  <Button className=" mt-4 " onClick={logOut}>
                    {" "}
                    Log Out
                  </Button>
                </div>
              </NavDropdown>
            ) : (
              <Nav.Link className=" text-white " as={Link} to="/login">
                Login
              </Nav.Link>
            )}
            <Nav.Link className=" text-white " as={Link} to="/cart">
              <div className=" position-relative">
                Cart
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-black">{UsersProduct.length}</span>
              </div>
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
//https://afternoon-scrubland-76608.herokuapp.com/

export default Navigation;
