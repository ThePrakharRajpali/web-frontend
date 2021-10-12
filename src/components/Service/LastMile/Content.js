import React from "react";

import "../../../index.css";
import "../../../public/css/Service/LastMile/Content.css";

import illustration from "../../../public/photos/lastmile.svg";
import grid from "../../../public/photos/PreServices.svg";

export const Content = () => {
  return (
    <div className="service-page-content">
      <div className="content">
        <img src={grid} alt="" />
        <p className="heading">
          <span>Last</span>-Mile <br />
          Delivery
        </p>
        <p>
          Last mile delivery, also known as last mile logistics, is the
          transportation of goods from a distribution hub to the final delivery
          destination. We provide last-mile delivery services for both B2B and
          B2C. <br /> Our last mile service is comprehensive and takes into
          account every cost factor. Not only do we provide our customers with
          cost saving options at every step, we also reach out for feedback of
          our personnel on the ground and continuously strive to improve the
          quality of our services.
        </p>
      </div>
      <div className="illustration">
        <img src={illustration} alt="" />
      </div>
    </div>
  );
};
