import React from "react";
import img from "../../assets/contact-img.jpg";
import { FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-info">
          <h1 className="contacts-heading">Let’s Build Something Together</h1>
          <p className="contacts-description">
            Whether you have a project in mind, want to collaborate, or just
            want to say hello—I’d love to hear from you! I'm actively looking
            for frontend developer roles where I can create intuitive and
            engaging user experiences.
          </p>

          {/* Gmail */}
          <div className="contact-item">
            <a href="mailto:krishnagup92@gmail.com">
              <div className="icon-circle">
                <SiGmail size={20} />
              </div>
            </a>
            <div>
              <h2 className="contact-title">Email :</h2>
              <a href="mailto:krishnagup92@gmail.com" className="contact-link">
                krishnagup92@gmail.com
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="contact-item">
            <a href="tel:8576869812">
              <div className="icon-circle">
                <FaPhoneAlt size={20} />
              </div>
            </a>
            <div>
              <h2 className="contact-title">Phone :</h2>
              <a href="tel:8576869812" className="contact-link">
                +91-8576869812
              </a>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="contact-item">
            <a href="https://www.linkedin.com/in/krishna55/" target="_blank" rel="noopener noreferrer">
              <div className="icon-circle">
                <FaLinkedinIn size={20} />
              </div>
            </a>
            <div>
              <h2 className="contact-title">LinkedIn :</h2>
              <a
                href="https://www.linkedin.com/in/krishna55/"
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                krishna55
              </a>
            </div>
          </div>
        </div>

        <div className="contact-image-wrapper">
          <img src={img} alt="Contact" className="contact-image" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
