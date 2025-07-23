import React from 'react';
import './Project.css';
import Project3 from '../../assets/Project_3.png';
import Project5 from '../../assets/Project_5.png';

const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-grid">

        {/* VoiceKit Card */}
        <div className="project-card">
          <a
            href="https://www.kiwitech.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit KiwiTech"
          >
            <img src={Project3} alt="Voice Kit" className="project-img" />
          </a>
          <div className="project-content">
            <h3 className="project-heading">Voice Kit</h3>
            <h4 className="project-subtitle">(Voice Emotion Analyzer)</h4>
            <p className="project-description">
              VoiceKit is an <strong>ML-powered tool</strong> that analyzes emotions in recorded <strong>audio conversations</strong> to help businesses <strong>evaluate client interactions</strong>.
              It features emotion detection, <strong>visual insights</strong> via bar and donut charts, and <strong>PDF reporting</strong> for stakeholders. The platform empowers organizations to
              improve communication strategies, <strong>boost client engagement</strong>, and drive informed decisions.
            </p>
            <ul className="tech-stack">
              <li>#react.js</li><li>#redux</li><li>#tailwind css</li><li>#python api</li><li>#chart.js</li>
              <li>#mongoDB</li><li>#mongoose</li><li>#css</li><li>#javascript</li><li>#figma</li>
            </ul>
          </div>
        </div>

        {/* Itax-Easy Card */}
        <div className="project-card">
          <a
            href="https://surya6394.github.io/Itax-easy-website/"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Itax-Easy website"
          >
            <img src={Project5} alt="Itax Easy" className="project-img" />
          </a>
          <div className="project-content">
            <h3 className="project-heading">Itax-Easy</h3>
            <h4 className="project-subtitle">(Software Development Agency)</h4>
            <p className="project-description">
              Developed a <strong>full-fledged software development</strong> platform focusing on <strong>user needs and efficiency</strong>.
              Built the complete site from scratch.
            </p>
            <ul className="tech-stack">
              <li>#react.js</li><li>#tailwind css</li><li>#node.js</li><li>#mongoDB</li>
              <li>#mongoose</li><li>#css</li><li>#javascript</li><li>#figma</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Projects;
