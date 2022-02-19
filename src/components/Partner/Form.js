import React, { Fragment, useState } from "react";
import axios from "axios";

import background from "../../public/photos/background.svg";
import grid from "../../public/photos/preServicesHeader.svg";
import contact from "../../public/photos/contact.svg";

import "../../public/css/Partner/Form.css";

export const Form = () => {
  const [data, setData] = useState({
    companyName: "",
    personName: "",
    email: "",
    contactNumber: "",
    message: "",
  });

  const [submit, setSubmit] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      data.companyName &&
      data.personName &&
      data.email &&
      data.contactNumber &&
      data.message
    ) {
      const formData = JSON.stringify(data);

      const config = {
        method: "post",
        url: "https://naataconnection.com/api//vendorContact/create",
        headers: {
          "Content-Type": "application/json",
        },
        data: formData,
      };

      axios(config)
        .then((res) => {
          // console.log(JSON.stringify(res, data));
          setData({
            companyName: "",
            personName: "",
            email: "",
            contactNumber: "",
            message: "",
          });
          setSubmit(true);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <Fragment>
      <div className="contact-form">
        <div className="section-header">
          {/* <img src={grid} alt="" /> */}
          <p>Partner with Us</p>
        </div>
        <img src={background} alt="" className="background-left" />
        <form>
          <div className="form-left">
            <label htmlFor="companyName">Company Name</label> <br />
            <input
              type="text"
              name="companyName"
              id="companyName"
              value={data.companyName}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="personName">Contact Person Name</label> <br />
            <input
              type="text"
              id="personName"
              name="personName"
              value={data.personName}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              value={data.email}
              onChange={handleChange}
            />{" "}
            <br />
            <label htmlFor="contactNumber">Contact Number</label> <br />
            <input
              type="text"
              id="contactNumber"
              name="contactNumber"
              value={data.contactNumber}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="message">Leave a message</label> <br />
            <textarea
              name=""
              id="message"
              name="message"
              cols="30"
              rows="10"
              onChange={handleChange}
              value={data.message}
            ></textarea>
          </div>
          <div className="form-right">
            <img src={contact} alt="" />
            <input
              type="submit"
              value={submit ? "Submitted" : "Submit"}
              className="submit-button"
              onClick={handleSubmit}
            />
          </div>
        </form>
        <img src={background} alt="" className="background-right" />
      </div>
    </Fragment>
  );
};
