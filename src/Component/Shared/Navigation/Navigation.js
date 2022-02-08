import React from "react";
import { Button, Container, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Navigation.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import category from "../../Category/Category";
import Category from "../../Category/Category";
import Login from "../../Login/Login";
import useAuth from "../../Hooks/useAuth";
import useFirebase from "../../Hooks/useFirebase";
import ShowAddCard from "../../ShowAddCard/ShowAddCard";

// const hardIcon = <FontAwesomeIcon icon={faLocationArrow} />;

const Navigation = () => {
  const { user, logOut } = useFirebase();
  console.log(user.displayName);
  console.log(user.email);
  return (
    <div className="text-white " style={{ position: "relative" }}>
      <Navbar bg="black" variant="dark" expand="lg">
        <Container>
          <Nav.Link className="text-white  hover" as={Link} to="/home">
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
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item to="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item to="#action4">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item to="#action5">Something else here</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link to="#" className="fw-medium">
                Link
              </Nav.Link>
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
            <Nav.Link className="">
              <ShowAddCard></ShowAddCard>
            </Nav.Link>

            {/* <Form className="d-flex">
              <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
              <Button variant="outline-success">Search</Button>
            // </Form> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
