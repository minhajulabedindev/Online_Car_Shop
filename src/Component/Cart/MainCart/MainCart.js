import React from "react";
import Cart from "../Cart/Cart";
import Carts from "../Cart/Carts";
import DeliveryInfo from "../DeliveryInfo/DeliveryInfo";
import OrderSummary from "../OrderSummary/OrderSummary";

const MainCart = () => {
  return (
    <div className="container ">
      <div className="">
        <div className="row ">
          <div className=" col-lg-7">
            <DeliveryInfo></DeliveryInfo>
          </div>
          <div className="col-lg-5">
            <OrderSummary></OrderSummary>
          </div>
        </div>
      </div>
      <div className="pt-lg-5">
        <Carts></Carts>
      </div>
    </div>
  );
};

export default MainCart;
