import React from "react";
import { Table } from "react-bootstrap";

const DashboardHomes = ({ users }) => {
  //   const UsersProduct = saveProduct.filter((product) => product.email === user.email);
  return (
    <div className="row text-start border- border-yellow">
      <div div className="col-4  mb-2 ">
        {users.displayName}
      </div>
      <div div className="col-4">
        {users.email}
      </div>
      <div div className="col-4">
        {users._id}
      </div>
      <hr />
    </div>
  );
};

export default DashboardHomes;
