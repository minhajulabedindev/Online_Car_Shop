import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";
import MainCart from "../MainCart/MainCart";
import OrderSummary from "../OrderSummary/OrderSummary";
import Cart from "./Cart";

const Carts = () => {
  const [products, setProducts] = useState([]);
  const [price, setPrice] = useState(0);
  console.log(price);

  console.log(products);
  const { user } = useAuth();
  useEffect(() => {
    fetch("https://afternoon-scrubland-76608.herokuapp.com/card")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);
  useEffect(() => {
    // totalProducts();
  }, [price]);

  const UsersProduct = products.filter((product) => product.email === user.email);
  const allprice = UsersProduct.reduce((a, v) => (a = a + v.price), 0);
  var deliveryCharge = 120;
  var tax = 100 / 0.5;
  var taxs = tax + allprice;

  const totalPrice = deliveryCharge + taxs;
  // const totalProducts = () => {
  //   var prices = 0;
  //   const price = UsersProduct.map((product) => product.price);
  //   const allPrice = prices + price;
  //   setPrice(price);
  //   console.log(allPrice);
  // };

  return (
    <div className="row">
      <div className="col-6">
        {UsersProduct.map((product) => (
          <Cart product={product}></Cart>
        ))}
      </div>
      <div className="col-6">
        {
          <>
            <div className="form-header ">
              <div className="oderSummary p-4 ">
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
                      {allprice} <span className="text-warning">$</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Delivery Charge</td>
                    <td>
                      {deliveryCharge} <span className="text-warning">$</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Taxs Charge</td>
                    <td>
                      {taxs} <span className="text-warning">$</span>
                    </td>
                  </tr>

                  <br />
                  <tr>
                    <td>Total</td>
                    <td>
                      {totalPrice} <span className="text-warning">$</span>
                    </td>
                  </tr>
                  <Button className="w-100 m-5 bg-warning"> Purchase</Button>
                </table>
              </div>
            </div>
          </>
        }
      </div>
    </div>
  );
};

export default Carts;
