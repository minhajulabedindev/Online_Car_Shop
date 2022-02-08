import React from "react";
import "./Category.css";

const Category = () => {
  return (
    <div className="row">
      <div className="col-md-3">
        <div className="car_model">
          <h3 className="">Audi</h3>
          <ul>
            <li>
              <a href="#">Audi 0PR</a>
            </li>
            <li>
              <a href="#">Audi CD5</a>
            </li>
            <li>
              <a href="#">Audi 6FGY</a>
            </li>
            <li>
              <a href="#">Audi 53F</a>
            </li>
            <li>
              <a href="#">Audi 36Y</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-md-3">
        <div className="car_model">
          <h3 className="">Tesla</h3>
          <ul>
            <li>
              <a href="#">Tesla-DE4j</a>
            </li>
            <li>
              <a href="#">Tesla-Cali</a>
            </li>
            <li>
              <a href="#">Tesla-9E7</a>
            </li>
            <li>
              <a href="#">Tesla-5i5</a>
            </li>
            <li>
              <a href="#">Tesla-Lucas</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-md-3">
        <div className="car_model">
          <h3 className="">BMW</h3>
          <ul>
            <li>
              <a href="#">Range-9u</a>
            </li>
            <li>
              <a href="#">Range-6l</a>
            </li>
            <li>
              <a href="#">Range-63r</a>
            </li>
            <li>
              <a href="#">Range-0pp</a>
            </li>
            <li>
              <a href="#">Range-GH</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-md-3">
        <div className="car_model">
          <h3 className="">Lamborghini</h3>
          <ul>
            <li>
              <a href="#">Lamborghini</a>
            </li>
            <li>
              <a href="#">Lamborghini </a>
            </li>
            <li>
              <a href="#">Lamborghini</a>
            </li>
            <li>
              <a href="#">Lamborghini</a>
            </li>
            <li>
              <a href="#">Lamborghini</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Category;
