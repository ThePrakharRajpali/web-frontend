import React from "react";
import Navbar from "./components/navbar";
import { Footer } from "./components/footer";
import Vision from "./components/About/Vision";
import { Value } from "./components/About/Value";
import { Fleet } from "./components/About/Fleet";
import { Client } from "./components/About/Client";
import { Team } from "./components/About/Team";
import Map from "./components/About/Map";

const About = () => {
  return (
    <div className="AboutPage">
      <Vision />
      <Value />
      <Fleet />
      <Client />
      <Team />
      <Map />
    </div>
  );
};

export default About;
