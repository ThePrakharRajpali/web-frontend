import React from "react";

import efficient from "../../../public/photos/efficient.svg";

import "../../../public/css/Service/LastMile/Card.css";

const Circle = ({ imgSrc, caption }) => {
  return (
    <div>
      <div class="Icon">
        <img src={imgSrc} alt="" />
      </div>
      <div className="caption">
        <p>{caption}</p>
      </div>
    </div>
  );
};

export const Cards = () => {
  return (
    <React.Fragment>
      <div className="grid">
        <div className="flex">
          <Circle imgSrc={efficient} caption="Fast Delivery" />
          <Circle imgSrc={efficient} caption="Convenience" />
          <Circle imgSrc={efficient} caption="Safety of Goods" />
          <Circle imgSrc={efficient} caption="Cost-Effective" />
          <Circle imgSrc={efficient} caption="Efficient Solutions" />
          <Circle imgSrc={efficient} caption="Technology" />
        </div>
      </div>
    </React.Fragment>
  );
};
