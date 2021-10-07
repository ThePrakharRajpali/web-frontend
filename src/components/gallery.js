import React from "react";

import "../index.css";
import "../public/css/gallery.css";

import preServiceHeader from "../public/photos/preServicesHeader.svg";
import sample from "../public/photos/sample.jpg";
import sample1 from "../public/photos/sample1.jpg";

export const Gallery = () => {
  return (
    <div className="gallery">
      <div className="gallery-header">
        <img src={preServiceHeader} alt="" className="gallery-header-img" />
        <p className="gallery-main-header">Gallery</p>
      </div>
      {/* <div className="gallery-main">
        <img src={sample1} alt="" className="image-main" />
        <img src={sample1} alt="" className="image-main" />
        <img src={sample1} alt="" className="image-main" />
        <img src={sample1} alt="" className="image-main" />
        <img src={sample} alt="" className="image-main" />
      </div> */}
    </div>
  );
};
