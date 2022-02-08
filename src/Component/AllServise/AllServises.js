import React, { useEffect, useState } from "react";
import AllServise from "./AllServise";

const AllServises = () => {
  const [products, setProducts] = useState([]);
  console.log(products.name);

  useEffect(() => {
    fetch("http://localhost:5000/bmw")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="container py-5 ">
      <h1>
        There is your <span className="color">favorite</span> car{" "}
      </h1>

      <div className="row">
        <div className="latest_product_box">
          <div className="row">
            {products.map((product) => (
              <AllServise key={product.postId} product={product}></AllServise>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllServises;
