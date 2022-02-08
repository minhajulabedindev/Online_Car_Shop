import React from "react";
import "./Banner.css";
import banner_1 from "../../../images/Banner-1.jpg";
import banner_2 from "../../../images/banner-2.jpg";
import banner_3 from "././../../../images/banner-3.jpg";
import banner_4 from "../../../images/banner-4.jpg";
import Header from "../Header/Header";
import Search from "../../Search/Search";
import { Carousel } from "react-bootstrap";
const Banner = () => {
  return (
    <div className="position">
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={banner_1} alt="First slide" />
          <div className="centered w-100 ms-5 ps-5 ">
            <Header></Header>
          </div>
          <div className="search">
            <Search></Search>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner_2} alt="Second slide" />
          <div className="centered w-100 ms-5 ps-5 ">
            <Header></Header>
          </div>
          <div className="search">
            <Search></Search>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner_3} alt="Third slide" />
          <div className="centered w-100 ms-5 ps-5 ">
            <Header></Header>
          </div>
          <div className="search">
            <Search></Search>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner_4} alt="Third slide" />
          <div className="centered w-100 ms-5 ps-5 ">
            <Header></Header>
          </div>
          <div className="search">
            <Search></Search>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
