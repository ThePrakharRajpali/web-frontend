import React, { useState } from "react";

import "../../index.css";
import "../../public/css/Partner/Reviews.css";

import grid from "../../public/photos/preServicesHeader.svg";
import customer from "../../public/photos/customer.jpg";

const ReviewCard = ({ imgSrc, name, company, review, color }) => {
  return (
    <div className="review-card">
      <img
        src={imgSrc}
        alt=""
        className={"customer-img customer-img-" + color}
      />
      <p className="customer-name">{name}</p>
      <p className={"customer-company text-" + color}>{company}</p>
      <p className="customer-review">{review}</p>
    </div>
  );
};

export const Reviews = () => {
  const [cardIndex, setCardIndex] = useState(1);
  const [translateX, setTranslateX] = useState(0);
  const numOfCards = 4;

  return (
    <div className="review-section" id="partner-us">
      <div className="review-header">
        <img src={grid} alt="" />
        <p>Customer Reviews</p>
      </div>

      <div className="cards">
        {/* <button className="carousel__button previous">&lt;</button> */}
        <ReviewCard
          imgSrc={customer}
          name={"Lorem ipsum"}
          company={"lorem ipsum"}
          review={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia odit facilis repellat nulla dicta laudantium provident aspernatur quidem suscipit omnis. Quos, placeat consectetur nam dolorem accusantium sed impedit cupiditate rem."
          }
          color={"blue"}
        />
        <ReviewCard
          imgSrc={customer}
          name={"lorem ipsum"}
          company={"lorem ipsum"}
          review={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. "
          }
          color={"orange"}
        />
        <ReviewCard
          imgSrc={customer}
          name={"Lorem ipsum"}
          company={"lorem ipsum"}
          review={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia odit facilis repellat nulla dicta laudantium provident aspernatur quidem suscipit omnis. Quos, placeat consectetur nam dolorem accusantium sed impedit cupiditate rem."
          }
          color={"blue"}
        />
        <ReviewCard
          imgSrc={customer}
          name={"lorem ipsum"}
          company={"lorem ipsum"}
          review={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. "
          }
          color={"orange"}
        />
      </div>
    </div>
  );
};
