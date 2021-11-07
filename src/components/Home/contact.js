import React, { useState, useEffect } from "react";
import axios from "axios";

import "../../index.css";
import "../../public/css/Home/contact.css";

import preServicesHeader from "../../public/photos/preServicesHeader.svg";
import background from "../../public/photos/background.svg";
import contactImg from "../../public/photos/contact.svg";

export const Contact = () => {
  const [connect, setConnect] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submit, setSubmit] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setConnect({ ...connect, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (connect.name && connect.email && connect.message) {
      const data = JSON.stringify(connect);

      const config = {
        method: "post",
        url: "https://naataconnection.com/api/genericContact/create",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then((res) => {
          // console.log(JSON.stringify(res, data));
          setConnect({ name: "", email: "", message: "" });
          setSubmit(true);
        })
        .catch((err) => console.log(err));
    }
  };

  // useEffect(() => {
  //   setConnect({ name: "", email: "", message: "" });
  //   setSubmit(false);
  // }, []);

  return (
    <div class="contact" id="contact-section">
      <div className="contact-header">
        <img src={preServicesHeader} alt="" className="contact-header-img" />
        <p className="contact-main-header">Contact Form</p>
      </div>
      <div className="contact-form">
        <img src={background} alt="" className="background-left" />
        <form>
          <div className="name-input">
            <label htmlFor="Contact-Name">Name</label>
            <br />
            <input
              type="text"
              id="Contact-Name"
              name="name"
              value={connect.name}
              onChange={handleChange}
            />
            <br />
          </div>
          <div className="email-input">
            <label htmlFor="Contact-Email">Email</label> <br />
            <input
              type="email"
              id="Contact-Email"
              name="email"
              value={connect.email}
              onChange={handleChange}
            />
            <br />
          </div>
          <div className="message-input">
            <label htmlFor="Contact-Message">Message</label> <br />
            <textarea
              name=""
              id="Contact-Message"
              rows="7"
              name="message"
              value={connect.message}
              onChange={handleChange}
            ></textarea>
            <br />
          </div>
          <img src={contactImg} alt="" className="form-illustration" />
          <input
            type="submit"
            value={submit ? "Submitted" : "Submit"}
            className="submit-button"
            onClick={handleSubmit}
          />
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
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d14888.216752498989!2d79.0983953!3d21.1104057!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1634536285939!5m2!1sen!2sin"
            width="450"
            height="300"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            title="googleMap"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
