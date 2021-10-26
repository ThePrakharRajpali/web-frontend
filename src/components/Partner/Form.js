import React, { Fragment } from "react";

import background from "../../public/photos/background.svg";
import grid from "../../public/photos/preServicesHeader.svg";
import contact from "../../public/photos/contact.svg";

import "../../public/css/Partner/Form.css";

export const Form = () => {
  return (
    <Fragment>
      <div className="contact-form grid-main">
        <div className="section-header">
          <img src={grid} alt="" />
          <p>Vendor Form</p>
        </div>
        <img src={background} alt="" className="background-left" />
        <form action="">
          <div className="form-left">
            <label htmlFor="companyName">Company Name</label> <br />
            <input type="text" name="" id="companyName" /> <br />
            <label htmlFor="personName">Contact Person Name</label> <br />
            <input type="text" id="personName" /> <br />
            <label htmlFor="email">Email</label>
            <br />
            <input type="email" id="email" /> <br />
            <label htmlFor="conactNumber">Contact Number</label> <br />
            <input type="text" id="contactNumber" /> <br />
            <label htmlFor="message">Leave a message</label> <br />
            <textarea name="" id="message" cols="30" rows="10"></textarea>
          </div>
          <div className="form-right">
            <img src={contact} alt="" />
            <input type="submit" value="Submit" className="submit-button" />
          </div>
        </form>
        <img src={background} alt="" className="background-right" />
      </div>
    </Fragment>
  );
};
