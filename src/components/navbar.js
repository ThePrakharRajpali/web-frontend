import React, { useState, useEffect, useRef } from "react";

import logo from "../public/photos/logo_english.svg";
import "../index.css";
import "../public/css/navbar.css";

import { Link } from "react-router-dom";

const useOutsideAlerter = (ref, dropdown, setDropdown) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        // alert("Clicked outside");
        if (dropdown == "") {
          setDropdown("");
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
};
const Navbar = () => {
  const [colorChange, setColorChange] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");
  const [dropdown, setDropdown] = useState("none");

  const wrapperRef = useRef(null);

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
    window.addEventListener("mousedown", () => {
      if (dropdown === "") {
        setDropdown("none");
        console.log("Hello");
      }
    });
  }, []);

  useOutsideAlerter(wrapperRef, dropdown, setDropdown);

  return (
    <React.Fragment>
      <nav ref={wrapperRef} className={colorChange ? "solid-nav" : ""}>
        <div className="nav-logo">
          <img src={logo} alt="" />
        </div>
        <div className="nav-items">
          <ul>
            <li className={activeTab === "Home" ? "active" : ""}>
              <Link to="/#" onClick={() => changeActiveTab("Home")}>
                Home
              </Link>
            </li>
            <li className={activeTab === "About" ? "active" : ""}>
              <Link to="/about#" onClick={() => changeActiveTab("About")}>
                About Us
              </Link>
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
              <Link to="/partner#" onClick={() => changeActiveTab("Partner")}>
                Partner
              </Link>
            </li>
            <li className={activeTab === "Contact" ? "active" : ""}>
              <Link
                to="/#contact-section"
                onClick={() => changeActiveTab("Contact")}
              >
                Contact Us
              </Link>
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
          <Link to="/FullTruck#">Full truck Load</Link>
          <hr />
          <Link to="/LastMile#">Last Mile Delivery</Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
