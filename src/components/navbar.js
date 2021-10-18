import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import logo from "../public/photos/logo_english.svg";
import "../index.css";
import "../public/css/navbar.css";

const Navbar = ({ activeTab }) => {
  const [colorChange, setColorChange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };

  useEffect(() => {
    changeNavbarColor();
    window.addEventListener("scroll", changeNavbarColor);
  }, []);

  return (
    <nav className={colorChange ? "solid-nav" : ""}>
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="nav-items">
        <ul>
          <li className={activeTab === "Home" ? "active" : ""}>
            <Link to="/">Home</Link>
          </li>
          <li className={activeTab === "About" ? "active" : ""}>
            <Link to="/about">About Us</Link>
          </li>
          <li className={activeTab === "Service" ? "active" : ""}>
            <a href="/#service-section">Services</a>
          </li>
          <li className={activeTab === "Partner" ? "active" : ""}>
            <Link to="/partner">Partner</Link>
          </li>
          <li className={activeTab === "Contact" ? "active" : ""}>
            <a href="/#contact-section">Contact Us</a>
          </li>
        </ul>
        <div />
      </div>
    </nav>
  );
};

export default Navbar;
