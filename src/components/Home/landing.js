import React from "react";

import "../../index.css";
import "../../public/css/Home/landing.css";

import sample from "../../public/videos/sample.mp4";
import preHeader from "../../public/photos/preheader.svg";

const Landing = () => {
  return (
    <React.Fragment>
      <div className="background">
        <video autoPlay muted loop id="video" src={sample} type="video/mp4">
          <source src={sample} type="video/mp4" />
        </video>
      </div>
      <section className="landing">
        <img src={preHeader} alt="" />
        <h1>
          <span className="header-orange">Ultimate</span> <br />
          Logistic Partner
        </h1>
        <p>
          Naata Connection is a full-time logistic service provider ensuring
          on-time delivery to the partners. We excel in Last-mile delivery
          transporting of goods from a distribution hub to the final delivery
          destination for both B2B and B2C clients. Also, we provide Full
          truckload shipping, carrying on your shipment and delivering it time
          with care.
        </p>
      </section>
    </React.Fragment>
  );
};

export default Landing;
