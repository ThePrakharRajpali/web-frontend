import React from "react";

import "../../../public/css/Service/FullTruck/Content.css";

import illustration from "../../../public/photos/loading.svg";
import grid from "../../../public/photos/PreServices2.svg";

const serviceContent = () => {
  return (
    <div className="fulltruck-page-content">
      <div className="fulltruck-illustration">
        <img src={illustration} alt="" />
      </div>
      <div className="fulltruck-content">
        <img src={grid} alt="" />
        <p className="fulltruck-heading">
          <span>Full</span> Truck <br />
          Load
        </p>
        <p>
          Being in the industry for over a Half a decade now, we offer premium,
          easiest and inexpensive full truck load delivery for our patrons. As a
          business provider you are well aware of this efficient method of
          product delivery. Having said that we have various types of truck
          sizes, mapping it to your shipment quantity is our expertise.
        </p>
      </div>
    </div>
  );
};

export default serviceContent;
