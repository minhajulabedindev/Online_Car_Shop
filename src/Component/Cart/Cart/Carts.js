import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import MainCart from "../MainCart/MainCart";
import OrderSummary from "../OrderSummary/OrderSummary";
import Cart from "./Cart";

const Carts = () => {
  const [products, setProducts] = useState([]);
  // const [price, setPrice] = useState(0);
  // console.log(price);
  console.log(products._id);
  const [users, setUsers] = useState([]);
  console.log(users);
  const navigate = useNavigate();

  const { user } = useAuth();
  useEffect(() => {
    fetch("https://afternoon-scrubland-76608.herokuapp.com/card")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);
  // useEffect(() => {
  //   // totalProducts();
  // }, [price]);

  const UsersProduct = products.filter((product) => product.email === user.email);
  console.log(UsersProduct.price);
  const allprice = UsersProduct.reduce((a, v) => (a = a + v.price), 0);
  var deliveryCharge = 120;
  var tax = 100 / 0.5;
  var taxs = allprice / tax;

  const totalPrice = deliveryCharge + taxs + allprice;
  // const totalProducts = () => {
  //   var prices = 0;
  //   const price = UsersProduct.map((product) => product.price);
  //   const allPrice = prices + price;
  //   setPrice(price);
  //   console.log(allPrice);
  // };

  const handlePurchase = () => {
    // console.log(_id);
    navigate("/purchase");
    const url = `http://localhost:5000/card`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged === true) {
          console.log(products);
          const remainingUser = products.filter((product) => product.email === user.email);
          console.log(remainingUser);
          setProducts(remainingUser);
        }
      });
  };
  return (
    <div className="row g-4">
      <div className="col-lg-6 ">
        <div className="me-4">
          {UsersProduct.map((product) => (
            <Cart product={product}></Cart>
          ))}
        </div>
      </div>
      <div className="col-lg-6">
        {
          <div div className="ms-lg-5">
            <div className="">
              <div className="oderSummary form-header p-lg-4 ">
                <h4>Order Summary</h4>
                <table id="customers">
                  <tr></tr>
                  <tr className="bg-light">
                    <td>Total Orders </td>
                    <td>{UsersProduct.length}</td>
                  </tr>
                  <tr>
                    <td>Price</td>
                    <td>
                      {allprice} <span className="text-success">$</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Delivery Charge</td>
                    <td>
                      {deliveryCharge} <span className="text-success">$</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Taxs Charge</td>
                    <td>
                      {taxs} <span className="text-success">$</span>
                    </td>
                  </tr>

                  <br />
                  <tr>
                    <td>Total</td>
                    <td>
                      {totalPrice} <span className="text-success">$</span>
                    </td>
                  </tr>
                  <div className="ms-4">
                    {" "}
                    <Button onClick={() => handlePurchase(UsersProduct)} className="w-100 m-5 bg-warning">
                      {" "}
                      Purchase
                    </Button>{" "}
                  </div>
                </table>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default Carts;
