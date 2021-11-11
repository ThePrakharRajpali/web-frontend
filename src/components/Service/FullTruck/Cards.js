import React from "react";
import "../../../index.css";
import "../../../public/css/Service/FullTruck/Card.css";

const Card = ({ content }) => {
  return (
    <div className="card">
      <p>{content}</p>
    </div>
  );
};

const serviceCard = () => {
  return (
    <div className="service-cards">
      <Card content="With services from Naata Connection you can expect bulk shipment delivery absolutely hassle free, as it has no weight restrictions, we take up the whole shipment for delivery." />
      <Card content="The transit duration is taken care of by us closely, with no extra halts, your shipment is delivered on time" />
      <Card content="Rest be assured that the lorry we will appoint for you will carry only your shipment and will deliver straight to your drop-off destination." />
      <Card content="Looking for a cost-effective delivery method, then we promise you that there is no other better shipping rate than us" />
    </div>
  );
};

export default serviceCard;
