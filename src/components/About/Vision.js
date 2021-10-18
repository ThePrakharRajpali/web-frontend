import React, { Fragment } from "react";

import "../../public/css/About/Vision.css";

import grid from "../../public/photos/preServicesHeader.svg";
import illustration from "../../public/photos/Vision.svg";

const Vision = () => {
  return (
    <Fragment>
      <div className="vision-section">
        <div className="vision-section-header">
          <img src={grid} alt="" />
          <p>Vision</p>
        </div>
        <div className="vision-section-content">
          <img src={illustration} alt="" />
          <p>
            Our vision is to become the most outstanding global logistics and
            supply chain partner and offer integrated services in all areas. We
            always look forward to building long-term relationships, be it with
            our clients, employees, or business partners. <br /> We ensure that
            our clients benefit from the solutions we offer. We want our
            employees to be satisfied with the growth and the opportunities they
            receive within the organization. We leverage our customer’s growth
            and take our vendors and our associates with us as we expand.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Vision;
