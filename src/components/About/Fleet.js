import React, { Fragment } from "react";

import grid from "../../public/photos/preServicesHeader.svg";

import "../../public/css/About/Fleet.css";

export const Fleet = () => {
  return (
    <Fragment>
      <div className="fleet-section">
        <div className="fleet-section-header">
          <img src={grid} alt="" />
          <p>Our Fleet</p>
        </div>
        <div className="fleet-section-content">
          We're continuously investing in new equipment to ensure our fleet
          provides the best customer value. More than 80% of our fleet is less
          than two years old. Newer models offer numerous advantages, including
          greater mobility, better environmental control systems, and increased
          safety due to improved design and enhanced load monitoring.
        </div>
      </div>
    </Fragment>
  );
};
