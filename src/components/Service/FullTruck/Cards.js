import React from "react";
import "../../../index.css";
import "../../../public/css/Service/FullTruck/Card.css";

const Card = () => {
  return (
    <div className="card">
      <p>
        FTL shipments get to the destination sooner, as the truck is making no
        other pickups or drop-offs along the way.
      </p>
    </div>
  );
};

const serviceCard = () => {
  return (
    <div className="service-cards">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default serviceCard;
