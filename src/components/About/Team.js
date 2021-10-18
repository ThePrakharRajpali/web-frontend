import React, { Fragment } from "react";

import grid from "../../public/photos/preServicesHeader.svg";
import profile from "../../public/photos/customer.jpg";

import "../../public/css/About/Team.css";

const Card = ({ name, img, position, content, color }) => {
  return (
    <div className="team-card">
      <div className="card-top">
        <img src={img} alt="" className={"border-" + color} />
        <div className="designation">
          <p className="name">{name}</p>
          <p className={"position text-" + color}>{position}</p>
        </div>
      </div>
      <p className="content">{content}</p>
    </div>
  );
};

export const Team = () => {
  return (
    <Fragment>
      <div className="team-section">
        <div className="team-header">
          <img src={grid} alt="" />
          <p>Team</p>
        </div>
        <div className="team-cards">
          <Card
            img={profile}
            name="Tanuja Agarwal"
            position="Proprietor"
            content="Under the able leadership of our Proprietor Mrs. Tanuja Agarwal, who started the Last-Mile Delivery services in Indore and upcountry in August 2018. She is an MBA Professional in IT & Marketing, with 3.5 years of work experience in the Insurance sector with Reliance Life Insurance, Bajaj Allianz Life Insurance, and the banking sector with Deutsche Bank & HDFC Bank. "
            color="blue"
          />

          <Card
            img={profile}
            name="Tanuja Agarwal"
            position="Proprietor"
            content="Under the able leadership of our Proprietor Mrs. Tanuja Agarwal, who started the Last-Mile Delivery services in Indore and upcountry in August 2018. She is an MBA Professional in IT & Marketing, with 3.5 years of work experience in the Insurance sector with Reliance Life Insurance, Bajaj Allianz Life Insurance, and the banking sector with Deutsche Bank & HDFC Bank. "
            color="orange"
          />
        </div>
      </div>
    </Fragment>
  );
};
