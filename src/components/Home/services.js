import React from "react";
import { Link } from "react-router-dom";

import "../../index.css";
import "../../public/css/Home/services.css";

import lastmile from "../../public/photos/lastmile.svg";
import loading from "../../public/photos/loading.svg";
import preServicesHeader from "../../public/photos/preServicesHeader.svg";
import preServices from "../../public/photos/PreServices.svg";
import preServices2 from "../../public/photos/PreServices2.svg";
import arrowRight from "../../public/photos/ArrowRight.svg";
import arrowLeft from "../../public/photos/ArrowLeft.svg";

const Services = () => {
  return (
    <div className="services" id="service-section">
      <div className="services-header">
        <img src={preServicesHeader} alt="" className="services-header-img" />
        <p className="services-main-header">Services</p>
      </div>
      <div className="full-load">
        <div className="service-left">
          <img src={preServices} alt="" />
          <p className="loading-header">
            <Link to="/FullTruck">
              <span className="color-orange">Full</span> truck
              <br />
              load
              <img src={arrowRight} alt="" className="arrowRight" />
            </Link>
          </p>
          <p className="service-content">
            Move your bulk shipping in minimum time with care
          </p>
        </div>
        <div className="service-right">
          <img src={loading} alt="" className="loading" />
        </div>
      </div>
      <div className="last-mile">
        <div className="service-left">
          <img src={lastmile} alt="" />
        </div>
        <div className="service-right">
          <img src={preServices2} alt="" />
          <p className="loading-header">
            <Link to="/LastMile">
              <span className="color-orange">Last</span>-Mile
              <br />
              <img src={arrowLeft} alt="" className="arrowLeft" />
              delivery
            </Link>
          </p>
          <p className="service-content">
            We are watchful, from instant distribution hub to final delivery
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
