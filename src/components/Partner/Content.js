import React, { Fragment } from "react";

import grid from "../../public/photos/preServicesHeader.svg";

import "../../public/css/Partner/Content.css";

const WhatWeOffer = () => {
  return (
    <div className="what-we-offer partner-content-section">
      <div className="what-we-offer-header partner-content-section-header">
        {/* <img src={grid} alt="" /> */}
        <p>What do we Offer?</p>
      </div>
      <div className="what-we-offer-content partner-content-section-content">
        Naata Connection offers Last-Mile Delivery and Full Truck Load services
        all over India. Both our services are cost-effective and quick.
        Last-mIle Delivery is suitable for both B2B and B2C. You can check out
        our official website to know more about other services. You can also
        reach out to us through our mail ID and phone number.
      </div>
    </div>
  );
};

const WhyPartner = () => {
  return (
    <div className="why-partner partner-content-section">
      <div className="why-partner-header partner-content-section-header">
        {/* <img src={grid} alt="" /> */}
        <p>Why Should You Partner with Us?</p>
      </div>
      <div className="why-partner-content partner-content-section-content">
        We offer you a wide range of innovative supply chains that includes
        Last-Mile Delivery and Express Movement. Our company aims at offering
        cutting-edge solutions to our clients. Our team provides logistics
        services for four business verticals :
        <ul className="left-align-content">
          <li>E-commerce</li>
          <li>Engineering and Electrical Hardware</li>
          <li>FMCG (Facilities Management Graduate Centre)</li>
          <li>Consumer Electronics and Institutional</li>
        </ul>
        Our team of experts adds maximum value to the business at every stage,
        starting from world-class logistic support to time-definite and quick
        deliveries of parcels and packages across India. Apart from Last-Mile
        Delivery we also offer Full Truck Load services. We make sure that the
        product reaches the final destination with proper safety.
      </div>
    </div>
  );
};

const BespokeRequests = () => {
  return (
    <div className="bespoke-requests partner-content-section">
      <div className="bespoke-requests-header partner-content-section-header">
        {/* <img src={grid} alt="" /> */}
        <p>Do we accept bespoke requests?</p>
      </div>
      <div className="bespoke-requests-content partner-content-section-content">
        During the festive time, we find a lot of bespoke requests for
        delivering the goods urgently. Yes, we do accept bespoke delivery. We
        make sure that you get a flexible delivery, especially during the
        festive season. We understand your needs and requirements and make sure
        that you get prompt delivery.
      </div>
    </div>
  );
};

export const Content = () => {
  return (
    <Fragment>
      <WhatWeOffer />
      <WhyPartner />
      <BespokeRequests />
    </Fragment>
  );
};
