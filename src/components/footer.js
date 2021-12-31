import React from "react";
import { Link } from "react-router-dom";

import "../index.css";
import "../public/css/footer.css";

import logoGray from "../public/photos/logoGray.svg";

const Footer = () => {
  return (
    <div className="footer-overall">
      <div className="footer">
        <p className="support">Support</p>
        <a className="track" href="mailto:support.naataconnection@gmail.com">
          support.naataconnection@gmail.com
        </a>
        <Link className="connect-with-us" to="/#contact-section">
          Connect
        </Link>
        <img src={logoGray} alt="" className="footer-logo" />
        {/* <p className="footer-content-1">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
          beatae ad maxime architecto commodi!
        </p> */}
        <Link className="footer-content-2" to="/login">
          Login
        </Link>
      </div>
      <hr />
      <div className="footer-down">
        {/* <p className="privacy-policy">Privacy Policy</p>
        <p className="tnc">Terms and Conditions</p>
        <p className="copyright">2021 NAATA Connection</p> */}
      </div>
    </div>
  );
};

export default Footer;
