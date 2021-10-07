import React from "react";

import "../index.css";
import "../public/css/footer.css";

import logoGray from "../public/photos/logoGray.svg";

export const Footer = () => {
  return (
    <div className="footer-overall">
      <div className="footer">
        <p className="support">Support</p>
        <p className="track">Track</p>
        <p className="connect-with-us">Connect with us</p>
        <img src={logoGray} alt="" className="footer-logo" />
        <p className="footer-content-1">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
          beatae ad maxime architecto commodi!
        </p>
        <p className="footer-content-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
          beatae ad maxime architecto commodi!
        </p>
      </div>
      <hr />
      <div className="footer-down">
        <p className="privacy-policy">Privacy Policy</p>
        <p className="tnc">Terms and Conditions</p>
        <p className="copyright">2021 NAATA Connection</p>
      </div>
    </div>
  );
};
