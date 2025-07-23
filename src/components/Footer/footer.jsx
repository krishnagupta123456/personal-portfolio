import React from "react";
import img from "../../assets/logo.png";
import SocialIcons from "../SocialIcons/socialIcons";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-left">
            <img src={img} alt="Profile image." />
            <p>
              Software Engineer skilled in Java, React, Redux, and Tailwind CSS. Passionate
              about building responsive, user-friendly, and accessible web applications.
            </p>
          </div>
          <div className="footer-right">
            <h2>Get in touch</h2>
            <SocialIcons />
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <a href="/">Krishna-Portfolio</a> |
          <p>Krishna Gupta © 2025</p>
        </div>
      </div>

    </>
  );
};

export default Footer;
