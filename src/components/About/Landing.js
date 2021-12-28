import React from "react";
import "../../public/css/About/Landing.css";
import grid from "../../public/photos/Blue_grid.svg";
import bg from "../../public/photos/Background_truck.png";

const Landing = () => {
  return (
    <div className="about-landing">
      <div className="about-background">
        <img src={bg} alt="" id="background-about" />
      </div>

      <div className="about-landing-content">
        <div className="about-landing-header">
          <img src={grid} alt="" />
          <p>About Us</p>
        </div>

        <div className="about-landing-main">
          <p>
            Since its inception in 2018, Naata Connection has become a leading
            logistics and supply chain services company in Madhya Pradesh. Our
            vision is to become the operating system for last-mile deliveries in
            India.
          </p>

          <br />
          <br />

          <p className="about-landing-sub-header">
            Market Leader In Supply Chain & Logistics
          </p>

          <br />

          <p>
            Naata Connection began its journey in 2018 with a mission of
            delivering logistics excellence to its customers and ensuring their
            success. Today, The company has firmly entrenched itself as the know
            service provider of the Last-Mile Delivery industry in India.
            <br />
            <br /> Naata Connection offers a wide range of innovative supply
            chain services including Last-Mile Delivery, Express Movement. The
            company provides logistics services for 4 different business
            verticals ranging from E-commerce, Engineering & Electrical
            Hardware, FMCG & Consumer Electronics, and Institutional.
            <br />
            <br /> We offer cutting-edge logistics solutions to our customers,
            enabling them to focus on their core competencies. The company adds
            maximum value to businesses at every level, right from providing
            world-class logistics support to ensuring time-definite deliveries
            of goods anywhere across India.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
