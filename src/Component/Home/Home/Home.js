import React from "react";
import AllCar from "../../AllCars/AllCar";
import Contact from "../../Contact/Contact";
import FindArea from "../../FindArea/FindArea";
import Login from "../../Login/Login";
import Premium from "../../premium/Premium";
import Rating from "../../Rating/Rating";
import ShowAddCard from "../../ShowAddCard/ShowAddCard";
import Slider from "../../Slider/Slide";
import Banner from "../Banner/Banner";
import Car_models from "../Car_models/Car_models";
import Form from "../Form/Form";
import PhoneNumber from "../PhoneNumber/PhoneNumber";
import ShowOneCar from "../ShowOneCar/ShowOneCar";

const Home = () => {
  return (
    <div>
      <Banner></Banner>

      <Form></Form>
      <AllCar></AllCar>
      <ShowOneCar></ShowOneCar>
      <Car_models></Car_models>
      <Slider></Slider>

      <PhoneNumber></PhoneNumber>
      <Rating></Rating>
      {/* <FindArea></FindArea> */}
      {/* <Premium></Premium> */}
      {/* <AllCar></AllCar> */}
    </div>
  );
};
export default Home;
