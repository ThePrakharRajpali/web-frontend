import React, { useState } from "react";

import "../../index.css";
import "../../public/css/Home/gallery.css";

import preServiceHeader from "../../public/photos/preServicesHeader.svg";
import sample from "../../public/photos/sample.jpg";
import sample1 from "../../public/photos/sample1.jpg";

export const Gallery = () => {
  const [imageIndex, setImageIndex] = useState(1);
  const [translateX, setTranslateX] = useState(0);
  const numOfImages = 5;

  const goPrevImg = (event) => {
    if (imageIndex !== 1) {
      setImageIndex(imageIndex - 1);
      setTranslateX(translateX + 100);
    } else {
      setImageIndex(numOfImages);
      setTranslateX((1 - numOfImages) * 100);
    }
  };

  const goNextImg = (event) => {
    if (imageIndex !== numOfImages) {
      setImageIndex(imageIndex + 1);
      setTranslateX(translateX - 100);
    } else {
      setImageIndex(1);
      setTranslateX(0);
    }
  };
  return (
    <div className="gallery">
      <div className="gallery-header">
        <img src={preServiceHeader} alt="" className="gallery-header-img" />
        <p className="gallery-main-header">Gallery</p>
      </div>
      <div className="gallery-main">
        <div className="gallery-carousel">
          <button className="carousel__button previous" onClick={goPrevImg}>
            &lt;
          </button>
          <div className="carousel__images">
            <img
              src={sample}
              alt=""
              className="image-main"
              style={{ transform: `translateX(${translateX}%)` }}
            />
            <img
              src={sample1}
              alt=""
              className="image-main"
              style={{ transform: `translateX(${translateX}%)` }}
            />
            <img
              src={sample}
              alt=""
              className="image-main"
              style={{ transform: `translateX(${translateX}%)` }}
            />
            <img
              src={sample1}
              alt=""
              className="image-main"
              style={{ transform: `translateX(${translateX}%)` }}
            />
            <img
              src={sample}
              alt=""
              className="image-main"
              style={{ transform: `translateX(${translateX}%)` }}
            />
          </div>
          <button className="carousel__button next" onClick={goNextImg}>
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};
