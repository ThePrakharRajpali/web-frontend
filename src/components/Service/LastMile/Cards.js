import React from "react";

import efficient from "../../../public/photos/efficient.svg";
import fastDelivery from "../../../public/photos/fast_delivery.svg";
import safetyOfGoods from "../../../public/photos/safety_of_goods.svg";
import technology from "../../../public/photos/technology.svg";
import convenience from "../../../public/photos/convenience.svg";
import costEffective from "../../../public/photos/cost_effective.svg";

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
          <Circle imgSrc={fastDelivery} caption="Fast Delivery" />
          <Circle imgSrc={convenience} caption="Convenience" />
          <Circle imgSrc={safetyOfGoods} caption="Safety of Goods" />
          <Circle imgSrc={costEffective} caption="Cost-Effective" />
          <Circle imgSrc={efficient} caption="Efficient Solutions" />
          <Circle imgSrc={technology} caption="Technology" />
        </div>
      </div>
    </React.Fragment>
  );
};
