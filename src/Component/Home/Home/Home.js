import React from "react";
import AllCar from "../../AllCars/AllCar";
import Date from "../../Date/Date";
import Rating from "../../Rating/Rating";
import Slider from "../../Slider/Slide";
import Banner from "../Banner/Banner";
import Form from "../Form/Form";
import PhoneNumber from "../PhoneNumber/PhoneNumber";
import ShowOneCar from "../ShowOneCar/ShowOneCar";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Date></Date>
      <Form></Form>
      <AllCar></AllCar>
      <ShowOneCar></ShowOneCar>
      <Slider></Slider>
      <PhoneNumber></PhoneNumber>
      <Rating></Rating>
    </div>
  );
};
export default Home;
