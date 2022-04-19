import React, { useEffect, useState } from "react";
import AllServise from "../AllServise/AllServise";
import AllCars from "./AllCars";

const AllCar = () => {
  const [products, setProducts] = useState([]);
  console.log(products);

  useEffect(() => {
    fetch("https://afternoon-scrubland-76608.herokuapp.com/bmw")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="container py-5 ">
      <h1>
        <span className="color">There is your favorite car</span>
      </h1>

      <div className="row">
        <div className="latest_product_box">
          <div className="row">
            {products.slice(14, 23).map((product) => (
              <AllCars key={product.postId} product={product}></AllCars>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCar;
