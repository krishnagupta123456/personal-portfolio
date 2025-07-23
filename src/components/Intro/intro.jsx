import React, { useState } from "react";
import './intro.css';
import bg from '../../assets/image.png';
import Contact from "../Contact/contact";
import Popup from "reactjs-popup";
import { FaArrowRightLong } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { IoDocumentTextOutline } from "react-icons/io5";

const Intro = () => {
  const [form, setForm] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Krishna-Gupta-Resumes.pdf";
    link.download = "Krishna-Gupta-Resumes.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleHire = () => setForm(true);
  const onClose = () => setForm(false);

  return (
    <>
      <div className="introduction-container">
        <div className="intro-text">
          <div className="">
            <h3 className="intro-greeting">Hi I am</h3>
            <h2 className="intro-name">
              Krishna Gupta
            </h2>
            <div className="intro-title-block">
              <h1>Software</h1>
              <h1 className="developer-text">Engineer</h1>
            </div>
            <p className="intro-description">
              Experienced in developing high-performance, interactive web applications with a focus on clean, maintainable code and seamless user experiences. Adept at delivering scalable, reliable solutions across both client and server-side environments.
            </p>
            <div className="intro-buttons">
              <button
                onClick={handleHire}
                className="hire-button"
              >
                Hire Me <FaArrowRightLong />
              </button>
              <button
                onClick={() => handleDownload()}
                className="resume-button"
              >
                <IoDocumentTextOutline /> Resume
              </button>
            </div>
            <div className="intro-contact">
              <div className="contact-item">
                <IoIosCall /><a href="https://wa.me/8576869812">+91-8576869812</a>
              </div>
              <div className="contact-item">
                <CiMail /><a href="mailto:krishnagup92@gmail.com">krishnagup92@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
        <div className="intro-image">
          <img
            src={bg}
            alt="Profile"
            className="profile-image"
          />
        </div>
      </div>

      <Popup open={form} modal closeOnDocumentClick={false} className="popup">
        <div className="popup-overlay">
          <div className="popup-box">
            <div className="popup-header">
              <h1 className="popup-title">Get in touch</h1>
              <button
                type="submit"
                onClick={onClose}
                className="popup-close"
              >
                X
              </button>
            </div>
            <Contact />
          </div>
        </div>
      </Popup>
    </>
  )
}

export default Intro;
