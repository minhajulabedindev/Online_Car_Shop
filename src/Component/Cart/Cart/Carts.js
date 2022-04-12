import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import MainCart from "../MainCart/MainCart";
import Cart from "./Cart";

const Carts = () => {
  const [products, setProducts] = useState([]);
  console.log(products);
  const { user } = useAuth();
  useEffect(() => {
    fetch("http://localhost:5000/card")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);
  const UsersProduct = products.filter((product) => product.email === user.email);
  return (
    <div>
      <div>
        {UsersProduct.map((product) => (
          <Cart product={product}></Cart>
        ))}
      </div>
    </div>
  );
};

export default Carts;
