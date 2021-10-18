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
          Full truckload, commonly referred to as FTL, is a type of shipping
          mode whereby a truck carries one dedicated shipment. In other words,
          the journey is reserved for one shipment only. FTL trucking has
          several advantages over the alternative trucking shipment mode, LTL,
          or less than a full truckload shipment.
        </p>
      </div>
    </div>
  );
};

export default serviceContent;
