import React, { Fragment } from "react";

import grid from "../../public/photos/preServicesHeader.svg";
import illustration from "../../public/photos/value.svg";

import "../../public/css/About/Value.css";

export const Value = () => {
  return (
    <Fragment>
      <div className="value-section">
        <div className="value-section-header">
          <img src={grid} alt="" />
          <p>Company Value</p>
        </div>
        <div className="value-section-content">
          <p>
            We believe in nurturing a healthy relationship with our partners and
            customers.
            <br /> We constantly strive to Evolve from an 'Effort-based
            Organization' to a 'Result-based Organization'.
            <br />
            We ensure that our Self-Discipline allows complete ownership and
            accountability of our work as well as compliance with our policies
            and processes.
            <br />
            We take a deep sense of pride in what we do.
            <br />
            We explore unchartered territories and continuously seek Knowledge.
            <br />
            We are Custodians our customers' goods and resources.
            <br />
            We believe in the power of talk while dealing with any situation.
          </p>
          <img src={illustration} alt="" />
        </div>
      </div>
    </Fragment>
  );
};
