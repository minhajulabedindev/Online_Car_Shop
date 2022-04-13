import React from "react";
import Carts from "../Cart/Carts";
import DeliveryInfo from "../DeliveryInfo/DeliveryInfo";

const MainCart = () => {
  return (
    <div className="container ">
      <div className="mt-5">
        <Carts></Carts>
      </div>
      <div className="pt-lg-5">
        <DeliveryInfo></DeliveryInfo>
      </div>
    </div>
  );
};

export default MainCart;
