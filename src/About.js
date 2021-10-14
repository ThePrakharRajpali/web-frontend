import React from "react";
import Navbar from "./components/navbar";
import { Footer } from "./components/footer";
import Vision from "./components/About/Vision";

const About = () => {
  return (
    <div className="AboutPage">
      <Navbar />
      <Vision />
      <Footer />
    </div>
  );
};

export default About;
