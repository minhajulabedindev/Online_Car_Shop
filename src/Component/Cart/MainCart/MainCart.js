import React from "react";
import Cart from "../Cart/Cart";
import Carts from "../Cart/Carts";
import DeliveryInfo from "../DeliveryInfo/DeliveryInfo";
import OrderSummary from "../OrderSummary/OrderSummary";

const MainCart = () => {
  return (
    <div className="container ">
      <div className="">
        <div className=" ">
          <div className="mt-5 pt-3">
            <Carts></Carts>
          </div>
        </div>
      </div>
      <div className="pt-lg-5">
        <DeliveryInfo></DeliveryInfo>
      </div>
    </div>
  );
};

export default MainCart;
