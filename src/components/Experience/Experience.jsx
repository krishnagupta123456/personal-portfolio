import React from "react";
import { CiCalendar, CiLocationOn } from "react-icons/ci";
import "./Experience.css";

const Experience = () => {
    return (
        <div className="experience-container">
            <h1 className="section-title">Work Experience</h1>

            <div className="experience-entry">
                <div className="experience-left">
                    <h2 className="position">Software Engineer</h2>
                    <h3 className="company">
                        <a href="https://shiwansh.com/" target="_blank" rel="noreferrer">
                            Shiwansh Solutions
                        </a>
                    </h3>
                    <div className="location">
                        <CiLocationOn size={20} />
                        <i>Mohali</i>
                    </div>
                    <div className="date">
                        <CiCalendar size={20} />
                        March 2024 - July 2025
                    </div>
                </div>

                <div className="timeline-dot">
                    <a
                        href="https://shiwansh.com/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Visit Shiwansh Solutions website"
                    ></a>
                </div>

                <div className="experience-right">
                    <ul className="responsibilities">
                        <li>
                            <span>
                                Developed responsive and <b>reusable UI components</b> using
                                React.js, Redux, and JavaScript, improving user experience and maintainability.
                            </span>
                        </li>
                        <li>
                            <span>
                                <b>Optimized performance</b>, reducing page load time by 30% and integrated <b>RESTful APIs</b> for real-time data updates.
                            </span>
                        </li>
                        <li>
                            <span>
                                Collaborated with UX/UI designers to <b>enhance accessibility</b> and worked in <b>Agile teams</b>, actively participating in standups and code reviews.
                            </span>
                        </li>
                        <li>
                            <span>
                                <b>Ensured application stability</b> with <b>unit testing</b> (Jest, Testing Lib.) and debugging to maintain high <b>code quality</b>.
                            </span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="experience-entry second">
                <div className="experience-left">
                    <h2 className="position">Software Engineer Trainee</h2>
                    <h3 className="company">
                        <a href="https://micronsol.com/" target="_blank" rel="noreferrer">
                            Micronsol India
                        </a>
                    </h3>
                    <div className="location">
                        <CiLocationOn size={20} />
                        <i>Gorakhpur, Uttar Pradesh</i>
                    </div>
                    <div className="date">
                        <CiCalendar size={20} />
                        July 2023 - February 2024
                    </div>
                </div>

                <div className="timeline-dot">
                    <a
                        href="https://micronsol.com/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Visit Micronsol India website"
                    ></a>
                </div>

                <div className="experience-right">
                    <ul className="responsibilities">
                        <li>
                            <span>
                                Developed foundational <b>frontend</b> and <b>backend</b> skills through a dynamic internship, focusing on <b>web app development</b> and <b>user experience</b> enhancement.
                            </span>
                        </li>
                        <li>
                            <span>
                                Gained hands-on experience with core <b>technologies</b> including <b>Java, J2EE, JavaScript, HTML, CSS</b>, and <b>React.js</b>.
                            </span>
                        </li>
                        <li>
                            <span>
                                Implemented <b>useState</b> and <b>useEffect</b> hooks in functional <b>components</b> to efficiently <b>manage state</b> and <b>side effects</b>, improving performance and maintainability.
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Experience;
