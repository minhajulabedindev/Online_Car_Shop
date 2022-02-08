import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import form from "../../../images/form/form-1.png";
import "./Form.css";

const Form = () => {
  return (
    <div className=" container mt-lg-5 bg-">
      <div className="row ">
        <div
          className="col-lg-6 col-sm-12 text-start
        "
        >
          <div class="">
            <div class="about-left">
              <h5>About Us</h5>
              <h3>Welcome to Dhononjoy Online Car Shop</h3>
              <p>
                Since 1969 we have not only committed ourselves to delivering exceptional repair and maintenance service to the worldwide automotive
                owners.
              </p>
              <div class="about-list">
                <ul className="text-decoration-none">
                  <li className="list text-decoration-none">
                    <i class="fas fa-hand-point-right color p-1"> </i>
                    We are a trusted name
                  </li>
                  <li>
                    <i class="fas fa-hand-point-right color px-2"> </i>
                    we deal in have all brands
                  </li>
                  <li>
                    <i class="fas fa-hand-point-right color px-3"> </i>
                    have a larger stock of vehicles
                  </li>
                  <li>
                    <i class="fas fa-hand-point-right color px-4"> </i>
                    we are at worldwide locations
                  </li>
                </ul>
              </div>
              <div>
                <div>
                  <p>President</p>
                  <h3>Atiqur Rhaman</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12 ">
          <img className="w-100" src={form}></img>
        </div>
      </div>
    </div>
  );
};

export default Form;
