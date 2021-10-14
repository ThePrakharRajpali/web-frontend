import React from "react";

import "../../index.css";
import "../../public/css/Home/contact.css";

import preServicesHeader from "../../public/photos/preServicesHeader.svg";
import background from "../../public/photos/background.svg";
import contactImg from "../../public/photos/contact.svg";
import map from "../../public/photos/map.svg";

export const Contact = () => {
  return (
    <div class="contact" id="contact-section">
      <div className="contact-header">
        <img src={preServicesHeader} alt="" className="contact-header-img" />
        <p className="contact-main-header">Contact Form</p>
      </div>
      <div className="contact-form">
        <img src={background} alt="" className="background-left" />
        <form action="#" method="get">
          <div className="name-input">
            <label htmlFor="Contact-Name">Name</label>
            <br />
            <input type="text" id="Contact-Name" />
            <br />
          </div>
          <div className="email-input">
            <label htmlFor="Contact-Email">Email</label> <br />
            <input type="email" id="Contact-Email" /> <br />
          </div>
          <div className="message-input">
            <label htmlFor="Contact-Message">Message</label> <br />
            <textarea name="" id="Contact-Message" rows="7"></textarea>
            <br />
          </div>
          <img src={contactImg} alt="" className="form-illustration" />
          <input type="submit" value="Submit" className="submit-button" />
        </form>
        <img src={background} alt="" className="background-right" />
      </div>

      <div className="Contact-Details">
        <div className="contact-left">
          <img src={preServicesHeader} alt="" />
          <p className="contact-us-header">
            <span>Contact</span> us
          </p>
          <p className="contact-us-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
            aspernatur perferendis, natus dolores quo
          </p>
        </div>
        <div className="contact-right">
          <img src={map} alt="" />
        </div>
      </div>
    </div>
  );
};
