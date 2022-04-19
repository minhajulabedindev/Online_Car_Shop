import React from "react";
import "./Header.css";
import logo from "././../../../images/logo-1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchLocation } from "@fortawesome/free-solid-svg-icons";
import { faCalendarTimes } from "@fortawesome/free-solid-svg-icons";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const location = <FontAwesomeIcon icon={faSearchLocation} />;
const time = <FontAwesomeIcon icon={faCalendarTimes} />;
const Header = () => {
  return (
    <div className=" medias text-white">
      <div className="row container ">
        <div className="col-lg-4 head  ">
          <img className="logo align-right " src="https://i.ibb.co/YNhj865/logo-1.png" alt></img>
        </div>

        <div className="col-lg-4   ">
          <div className="ms-5 ps-5 d-flex">
            <div className="fs-1 mt-5 p-2 color ">{location} </div>
            <div>
              <h4 className=" text  medias text-center pt-3">Puthia-Rajshahi</h4>
              <p className=" media fo">Bangladesh</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 d-flex  medias ">
          <div className="ms-5 ps-5 ">
            <div className="fs-1 align-middle mt-5 color p-2">
              <i class="fas fa-clock"></i>
            </div>
          </div>
          <div>
            {" "}
            <h4 className=" text  medias pt-3">Monday to Friday </h4>
            <p>9:00am - 6:00pm</p>
          </div>
        </div>

        <div></div>
        <h4></h4>
      </div>
    </div>
  );
};

export default Header;
