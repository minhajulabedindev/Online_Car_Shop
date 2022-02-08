import React, { useState } from "react";
import "./ShowAddCard.css";
import { Badge, Button, Nav, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
const ShowAddCards = ({ product }) => {
  const [users, setUsers] = useState([]);
  console.log(users);
  const { name, img, price, _id } = product;

  // handle delete product from add to cart
  const handleDelete = (id) => {
    console.log(id);
    const proceed = window.confirm("Are you sure? you want to delete");
    if (proceed) {
      const url = `http://localhost:5000/card/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("delete successfully");
            const remainingUser = users.filter((user) => user._id === id);
            console.log(remainingUser);
            setUsers(remainingUser);
          }
        });
    }
  };
  return (
    <div>
      <div className="CartProduct-style row align-items-center ">
        <div className="col-3 col-md-3 col-lg-3 col-sm-3 p-2">
          <img className=" w-100 " src={img}></img>
        </div>
        <div className="col-4 col-md-4 col-lg-4 col-sm-4">
          <h6>{name}</h6>
        </div>
        <div className="p-1 col-2 col-md-2 col-lg-2 col-sm-2">
          <span className="price text-primary">${price}</span>
        </div>
        <div className="p-2 col-3  col-md-3 col-lg-3 col-sm-3">
          {" "}
          <Button as={Link} to="/buy" className="w-100 mb-1" size="sm">
            {" "}
            Buy{" "}
          </Button>
          <Button size="sm" className="btn-delete w-100" onClick={() => handleDelete(_id)}>
            Delete
          </Button>
        </div>
      </div>
      <hr></hr>
    </div>
  );
};

export default ShowAddCards;
