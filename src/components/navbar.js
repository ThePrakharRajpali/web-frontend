import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import logo from "../public/photos/logo_english.svg";
import "../index.css";
import "../public/css/navbar.css";

const Navbar = () => {
  const [colorChange, setColorChange] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");
  const [dropdown, setDropdown] = useState("none");

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };

  const changeActiveTab = (data) => {
    setActiveTab(data);
  };

  const activateDropwdown = () => {
    setDropdown("");
  };
  const deactivateDropdown = () => {
    setDropdown("none");
  };
  useEffect(() => {
    changeNavbarColor();
    window.addEventListener("scroll", changeNavbarColor);
  }, []);

  return (
    <React.Fragment>
      <nav className={colorChange ? "solid-nav" : ""}>
        <div className="nav-logo">
          <img src={logo} alt="" />
        </div>
        <div className="nav-items">
          <ul>
            <li className={activeTab === "Home" ? "active" : ""}>
              <a href="/#" onClick={() => changeActiveTab("Home")}>
                Home
              </a>
            </li>
            <li className={activeTab === "About" ? "active" : ""}>
              <a href="/about#" onClick={() => changeActiveTab("About")}>
                About Us
              </a>
            </li>
            <li className={activeTab === "Service" ? "active" : ""}>
              <a
                // href="/#service-section"
                onClick={() => {
                  changeActiveTab("Service");
                  if (dropdown === "none") activateDropwdown();
                  else deactivateDropdown();
                }}
              >
                Services
              </a>
            </li>
            <li className={activeTab === "Partner" ? "active" : ""}>
              <a href="/partner#" onClick={() => changeActiveTab("Partner")}>
                Partner
              </a>
            </li>
            <li className={activeTab === "Contact" ? "active" : ""}>
              <a
                href="/#contact-section"
                onClick={() => changeActiveTab("Contact")}
              >
                Contact Us
              </a>
            </li>
          </ul>

          <div />
        </div>
      </nav>
      <div className="extra-class" style={{ display: dropdown }}>
        <div
          className={
            colorChange ? "Service-Dropdown solid-nav" : "Service-Dropdown"
          }
        >
          <a href="/FullTruck#">Full truck Load</a>
          <a href="/LastMile#">Last Mile Delivery</a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
