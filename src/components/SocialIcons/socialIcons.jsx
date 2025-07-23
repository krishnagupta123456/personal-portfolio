import React from 'react';
import { FaLinkedin, FaWhatsapp, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';
import './socialIcons.css';

const SocialIcons = () => {
  return (
    <div className="social-icons-container">
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/krishna55/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon linkedin"
        aria-label="LinkedIn"
      >
        <FaLinkedin size={24} />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/8576869812"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon whatsapp"
        aria-label="WhatsApp"
      >
        <FaWhatsapp size={24} />
      </a>

      {/* Email */}
      <a
        href="mailto:krishnagup92@gmail.com"
        className="social-icon email"
        aria-label="Email"
      >
        <FaEnvelope size={24} />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/krishnagupta123456"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon github"
        aria-label="GitHub"
      >
        <FaGithub size={24} />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/krishnagupta__09/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon instagram"
        aria-label="Instagram"
      >
        <FaInstagram size={24} />
      </a>
    </div>
  );
};

export default SocialIcons;
