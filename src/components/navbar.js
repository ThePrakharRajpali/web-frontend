import React, { useState, useEffect } from "react";
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
          <li className="active">Home</li>
          <li>About Us</li>
          <li>Services</li>
          <li>Partner</li>
          <li>Contact Us</li>
        </ul>
        <div />
      </div>
    </nav>
  );
};

export default Navbar;
