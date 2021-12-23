import React, { Fragment } from "react";

import grid from "../../public/photos/preServicesHeader.svg";
import arun from "../../public/photos/ArunAgarwal.jpeg";
import tanuja from "../../public/photos/TanujaAgarwal.jpeg";

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
            img={tanuja}
            name="Tanuja Agarwal"
            position="Proprietor"
            content="Under the able leadership of our Proprietor Mrs. Tanuja Agarwal, who started the Last-Mile Delivery services in Indore and upcountry in August 2018. She is an MBA Professional in IT & Marketing, with 3.5 years of work experience in the Insurance sector with Reliance Life Insurance, Bajaj Allianz Life Insurance, and the banking sector with Deutsche Bank & HDFC Bank. "
            color="blue"
          />

          <Card
            img={arun}
            name="Arun Agarwal"
            position="Head Business Development"
            content="
A professional with honed communication, interpersonal sales skill, and distinction in escalating business turnovers and development.

Education: BE In Production & Industrial Engineering and MBA in Supply Chain & Operations.
 
Working Experience: 15 Years in Sales & vendor Development with Major Automobile OEM’s. Such as 

Tata Motors Ltd ( Worked in Vendor Development From 2006 to 2010 and in Cargo Sales from 2010 to 2014 )
Mahindra & Mahindra Ltd  ( State Head Madhya Pradesh from 2014 to 2017)
Piaggio Vehicles Pvt Ltd ( Regional Sales Manager North from 2017 to 2019 ).
"
            color="orange"
          />
        </div>
      </div>
    </Fragment>
  );
};
