import React from "react";
import "./ShowOneCar.css";
import photo from "../../../images/car/toyota-offer-2.861de085.png";
const ShowOneCar = () => {
  return (
    <div>
      <section class="gauto-promo-area mt-5 py-5">
        <div class="container my-5">
          <div class="align-items-center row p-5">
            <div class="col-md-6">
              <div class="promo-box-left">
                <img className="w-100 d" src={photo} alt="promo car" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="promo-box-right">
                <h3 className=" text-white">Do You Want To Earn With Us? So Don't be Late.</h3>
                <a class="gauto-btn" href="/">
                  Become a driver
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShowOneCar;
