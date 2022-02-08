import { render } from "@testing-library/react";
import "./ShowAddCard.css";
import React, { useEffect, useState } from "react";
import { Badge, Button, Nav, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFirebase from "../Hooks/useFirebase";
import ShowAddCards from "./ShowAddCards";

const ShowAddCard = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { user } = useFirebase();

  const [saveProducts, setSaveProducts] = useState([]);
  console.log(saveProducts);
  //fetch savedProduct API
  useEffect(() => {
    fetch("http://localhost:5000/card")
      .then((res) => res.json())
      .then((data) => setSaveProducts(data));
  }, [saveProducts]);

  const UsersProduct = saveProducts.filter((product) => product.email === user.email);
  return (
    <div className="">
      <h5 onClick={handleShow}>
        <Badge className="text-white">{saveProducts.length}</Badge>
        <i class="fas fa-shopping-cart  text-primary"> </i>
      </h5>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {UsersProduct.map((product) => (
            <ShowAddCards key={product._id} product={product}></ShowAddCards>
          ))}
        </Offcanvas.Body>
        <div className="cart_footer">
          {/* <Link to="/cart">
            <Button className="btn_banner">My Orders</Button>
          </Link> */}
          {/* <Link to="/checkout">
                        <Button className="btn_banner">Checkout</Button>
                    </Link> */}
        </div>
      </Offcanvas>
    </div>
  );
};
render(<ShowAddCard />);
export default ShowAddCard;
