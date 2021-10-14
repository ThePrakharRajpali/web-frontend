import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import logo from "../public/photos/logo_english.svg";
import "../index.css";
import "../public/css/navbar.css";

const Navbar = () => {
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
          <li className="active">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us </Link>
          </li>
          <li>
            <a href="/#service-section">Services</a>
          </li>
          <li>
            <Link to="/partner">Partner</Link>
          </li>
          <li>
            <a href="/#contact-section">Contact Us</a>
          </li>
        </ul>
        <div />
      </div>
    </nav>
  );
};

export default Navbar;
