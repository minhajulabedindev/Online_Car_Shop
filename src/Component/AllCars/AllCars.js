import { render } from "@testing-library/react";
import axios from "axios";
import React, { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import { useHistory } from "react-router";
import useAuth from "../Hooks/useAuth";
import useFirebase from "../Hooks/useFirebase";
import MyVerticallyCenteredModal from "../Modal/Modal";
import "./AllCars.css";

const AllCars = (props) => {
  const { name, body, price, discount, since, oil, img, _id } = props.product;
  const user = useFirebase();
  const { email } = user.user;

  // console.log(email);
  const data = { name, body, price, discount, since, oil, img, _id, email };

  const handleAddToCart = () => {
    console.log();
    axios.post("http://localhost:5000/card", data).then((res) => {
      if (res.data.insertedId) {
        alert("Blog Added Successful!!");
      }
    });
  };
  const [modalShow, setModalShow] = React.useState(false);
  console.log(modalShow);
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal {...props} size="lg" centered>
        <Modal.Header closeButton>
          <div className="text-center ">
            <Modal.Title id="contained-modal-title-vcenter">{name}</Modal.Title>
          </div>
        </Modal.Header>

        <div class="product-card">
          <div class="shoe-details">
            <div className="text-center">
              <img className="blue active w-75 p-3 " src={img}></img>
            </div>
            <p>{body}</p>
            <h6>
              <span class="px- mx-1">
                {" "}
                <i class="fas fa-fill-drip text-warning fs-6 px-1"></i> Oil-{oil}{" "}
              </span>
              <span class="">
                {" "}
                <i class="fas fa-eye text-warning fs-6 px-1"></i> since-{since}
              </span>
            </h6>
            <div class="stars">
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bxs-star"></i>
              <i class="bx bx-star"></i>
            </div>
          </div>
          <div class="color-price">
            <div class="color-option">
              <span class="color">{discount}% OFF</span>
              <div class="circles">
                <span class="circle blue active" id="blue"></span>
                <span class="circle pink " id="pink"></span>
                <span class="circle yellow " id="yellow"></span>
              </div>
            </div>
            <div class="price">
              <span class="price_num">${price}</span>
              <span class="price_letter">Nine dollar only</span>
            </div>
          </div>{" "}
          <div class="button">
            <div class="button-layer "></div>
            <Button onClick={handleAddToCart}>Add To Cart</Button>
          </div>
        </div>
      </Modal>
    );
  }

  return (
    <div className="col-lg-4 col-sm-12 my-2 ">
      <div class="product-card">
        <div class="main-images">
          <img id="blue" class="blue active w-100 p-3 " src={img} alt="blue" />
        </div>
        <div class="shoe-details">
          <span class="shoe_name  ">{name}</span>

          <p>{body}</p>
          <h6>
            <span class="px- mx-1">
              {" "}
              <i class="fas fa-fill-drip text-warning fs-6 px-1"></i> Oil-{oil}{" "}
            </span>
            <span class="">
              {" "}
              <i class="fas fa-eye text-warning fs-6 px-1"></i> since-{since}
            </span>
          </h6>
          <div class="stars">
            <i class="bx bxs-star"></i>
            <i class="bx bxs-star"></i>
            <i class="bx bxs-star"></i>
            <i class="bx bxs-star"></i>
            <i class="bx bx-star"></i>
          </div>
        </div>
        <div class="color-price">
          <div class="color-option">
            <span class="color">{discount}% OFF</span>
            <div class="circles">
              <span class="circle blue active" id="blue"></span>
              <span class="circle pink " id="pink"></span>
              <span class="circle yellow " id="yellow"></span>
            </div>
          </div>
          <div class="price">
            <span class="price_num">${price}</span>
            <span class="price_letter">Nine dollar only</span>
          </div>
        </div>
        <div class="button">
          <div class="button-layer "></div>
          <Button onClick={() => setModalShow(true)}>Add To Cart</Button>

          <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
        </div>
      </div>
      <>
        {/* <Button variant="primary" >
          Launch vertically centered modal
        </Button> */}
      </>
    </div>
  );
};
// render(<AllCars />);
export default AllCars;
