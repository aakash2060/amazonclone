import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__links">
        <div className="footer__column">
          <h3>Get to Know Us</h3>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Press Releases</li>
            <li>Amazon Cares</li>
          </ul>
        </div>
        <div className="footer__column">
          <h3>Make Money with Us</h3>
          <ul>
            <li>Sell on Amazon</li>
            <li>Sell under Amazon Accelerator</li>
            <li>Amazon Global Selling</li>
            <li>Become an Affiliate</li>
          </ul>
        </div>
        <div className="footer__column">
          <h3>Amazon Payment</h3>
          <ul>
            <li>Amazon Pay</li>
            <li>Amazon Pay Later</li>
            <li>Gift Cards</li>
            <li>Amazon Currency Converter</li>
          </ul>
        </div>
        <div className="footer__column">
          <h3>Let Us Help You</h3>
          <ul>
            <li>Your Account</li>
            <li>Returns Centre</li>
            <li>100% Purchase Protection</li>
            <li>Amazon App Download</li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <img
          src="Amazon-Logo-White-Transparent.png"
          alt="Amazon Logo"
          className="footer__logo"
        />
        <p>© 2024 Amazon Clone. Developed by Aakash Poudel.</p>
      </div>
    </div>
  );
}

export default Footer;
