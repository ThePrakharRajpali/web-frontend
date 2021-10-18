import React, { Fragment } from "react";

import grid from "../../public/photos/preServicesHeader.svg";
import map from "../../public/photos/map.svg";

import "../../public/css/About/Map.css";

const Map = () => {
  return (
    <Fragment>
      <div className="map-section">
        <div className="map-header">
          <img src={grid} alt="" />
          <p>Map</p>
        </div>
        <div className="map-content">
          <img src={map} alt="" className="map-illustration" />
        </div>
      </div>
    </Fragment>
  );
};

export default Map;
