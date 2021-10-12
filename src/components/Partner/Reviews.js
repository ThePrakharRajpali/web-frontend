import React from "react";

import "../../index.css";
import "../../public/css/Partner/Reviews.css";

import grid from "../../public/photos/preServicesHeader.svg";
import customer from "../../public/photos/customer.jpg";

const ReviewCard = ({ imgSrc, name, company, review, color }) => {
  return (
    <div className="review-card">
      <img src={imgSrc} alt="" className="customer-img" />
      <p className="customer-name">{name}</p>
      <p className="customer-company">{company}</p>
      <p className="review">{review}</p>
    </div>
  );
};

export const Reviews = () => {
  return (
    <div className="review-section grid-main">
      <div className="header">
        <img src={grid} alt="" />
        <p>Customer Reviews</p>
      </div>

      <div className="cards">
        <ReviewCard
          imgSrc={customer}
          name={"lorem ipsum"}
          company={"lorem ipsum"}
          review={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. "
          }
          color={"blue"}
        />
        {/* <ReviewCard
          imgSrc={customer}
          name={"lorem ipsum"}
          company={"lorem ipsum"}
          review={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. "
          }
          color={"orange"}
        /> */}
      </div>
    </div>
  );
};
