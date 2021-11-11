import React from "react";

import "../../../index.css";
import "../../../public/css/Service/LastMile/Content.css";

import illustration from "../../../public/photos/lastmile.svg";
import grid from "../../../public/photos/PreServices.svg";

export const Content = () => {
  return (
    <div className="service-page-content">
      <div className="lastmile-content">
        <img src={grid} alt="" />
        <p className="lastmile-heading">
          <span>Last</span>-Mile <br />
          Delivery
        </p>
        <p>
          Transportation of goods from the warehouse to their final destination.
          Also known as last mile logistics, we cater to both B2B and B2C
          clients. In this, transfer of goods happens to customers who are
          mostly located in dense areas. <br /> Delivery of some products
          demands major highway trips, which are expensive and a little more
          time consuming, the main purpose of last-mile delivery is to make the
          products available timely no matter what. <br /> Our primary aim is to
          provide high end quality services at reasonable prices and achieve
          customer satisfaction.
        </p>
      </div>
      <div className="lastmile-illustration">
        <img src={illustration} alt="" />
      </div>
    </div>
  );
};
