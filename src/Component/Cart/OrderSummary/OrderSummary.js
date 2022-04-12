import React from "react";

const OrderSummary = () => {
  return (
    <div>
      {" "}
      <div className="mt-lg-5 pt-lg-5 form-header ">
        <div className="oderSummary p-4 ">
          <h4>Order Summary</h4>
          <table id="customers">
            <tr></tr>
            <tr>
              <td>Total Orders</td>
              <td>99</td>
            </tr>
            <tr>
              <td>Price</td>
              <td>99</td>
            </tr>

            <br />
            <tr>
              <td>Total</td>
              <td>99</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
