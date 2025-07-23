import React from "react";
import SocialIcons from "../SocialIcons/socialIcons";
import {
  FaCode,
  FaDatabase,
  FaGraduationCap,
  FaLayerGroup,
} from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import { MdDisplaySettings } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { HiArrowLongRight } from "react-icons/hi2";
import "./about.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-left">
        <h1 className="section-title">About Me</h1>
        <div className="section-text">
          <p>
            I’m a Software Engineer with over <b>2 years of professional experience</b> in building scalable, responsive, and user-centric web applications.I’m passionate about creating clean, intuitive, and efficient user interfaces that enhance user experiences and drive engagement.
          </p>
          <p>
            With a strong  commitment to performance, usability, and maintainability,I enjoy turning complex ideas into elegant digital solutions. I thrive in collaborative, agile environments and take pride in delivering high-quality work that meets both user needs and business goals.
          </p>
          <p>
            My goal is to continue creating impactful digital experiences that align with business objectives while providing exceptional value to end users.
          </p>
        </div>

        <h2 className="section-subtitle">Education</h2>
        <div className="education">
          <FaGraduationCap size={30} className="icon" />
          <div>
            <h3>B-TECH in Computer Science and Engineering</h3>
            <h4>Dr. APJ Abdul Kalam Technical University, Lucknow</h4>
            <div className="calendar">
              <CiCalendar size={20} />
              <span>2019 - 2023</span>
            </div>
          </div>
        </div>

        <h2 className="section-subtitle">Connect With Me</h2>
        <div className="social-icons">
          <SocialIcons />
        </div>
      </div>

      <div className="about-right">
        <h2 className="section-subtitle">Technical Skills</h2>
        <div className="skills-columns">
          <div className="skill-group">
            <div className="skill-title">
              <FaCode className="icon" /> Languages
            </div>
            <ul>
              <li>Java</li>
              <li>JavaScript</li>
              <li>C</li>
              <li>HTML5</li>
              <li>CSS3</li>
            </ul>
          </div>
          <div className="skill-group">
            <div className="skill-title">
              <FaLayerGroup className="icon" /> Frameworks & Libraries
            </div>
            <ul>
              <li>React JS</li>
              <li>Redux & Flux</li>
              <li>Spring Framework</li>
              <li>Tailwind CSS</li>
              <li>Bootstrap</li>
            </ul>
          </div>
        </div>

        <div className="skills-columns">
          <div className="skill-group">
            <div className="skill-title">
              <MdDisplaySettings className="icon" /> Web Dev Tools
            </div>
            <ul>
              <li>Git</li>
              <li>GitHub</li>
              <li>IntelliJ</li>
              <li>Postman</li>
            </ul>
          </div>
          <div className="skill-group">
            <div className="skill-title">
              <FaDatabase className="icon" /> Database
            </div>
            <ul>
              <li>Mongo DB</li>
              <li>MySQL</li>
            </ul>
          </div>
        </div>

        <div className="github-card">
          <div className="github-header">
            <FiGithub className="icon" /> Latest GitHub Contributions
          </div>
          <p>View my projects and contributions on GitHub</p>
          <a
            href="https://github.com/krishnagupta123456"
            target="_blank"
            rel="noreferrer"
            className="github-link"
          >
            Visit my GitHub profile <HiArrowLongRight />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
