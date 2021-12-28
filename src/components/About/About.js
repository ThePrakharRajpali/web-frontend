import React from "react";
import Vision from "./Vision";
import { Value } from "./Value";
import { Fleet } from "./Fleet";
import { Client } from "./Client";
import { Team } from "./Team";
import Landing from "./Landing";
import Map from "./Map";


const About = () => {
  return (
    <div className="AboutPage">
      <Landing />
      <Vision />
      <Value />
      <Fleet />
      <Client />
      <Team />
      {/* <Map /> */}
    </div>
  );
};

export default About;
