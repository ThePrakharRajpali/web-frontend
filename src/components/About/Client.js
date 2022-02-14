import React, { Fragment } from "react";

import grid from "../../public/photos/preServicesHeader.svg";

import "../../public/css/About/Client.css";

export const Client = () => {
  return (
    <Fragment>
      <div className="client-section">
        <div className="client-header">
          {/* <img src={grid} alt="" /> */}
          <p>Our Clients</p>
        </div>
        <div className="client-content">
          Our clients benefit from the tremendous focus we drive in the total
          solution, the entire business model to the operations, the result of
          which is a fully functional entity.
          <br /> <br />
          The solutions are designed to provide our clients the following
          benefits:
          <br />
          Increased operational efficiency
          <br />
          Increased competitive advantage
          <br />
          Increased operational effectiveness
        </div>
      </div>
    </Fragment>
  );
};
