import React from "react";
import Contact from "../Contact/Contact";
import Premium from "../premium/Premium";
import "./About.css";
import AboutPepole from "./AboutPepole/AboutPepole";

const About = () => {
  return (
    <div>
      <AboutPepole></AboutPepole>
      <Contact></Contact>
      <Premium></Premium>
    </div>
  );
};

export default About;
