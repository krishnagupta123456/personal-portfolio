import React, { useEffect, useState } from "react";
import logo from '../../assets/logo.png';
import Intro from "../Intro/intro";
import About from "../About/about";
import Contact from "../Contact/contact";
import Projects from "../Projects/Project";
import Footer from "../Footer/footer";
import Experience from "../Experience/Experience";
import './navbar.css';

const sections = ["home", "about", "experience", "projects", "contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("home");

  const toggleMenu = () => setIsOpen(!isOpen);


  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      let current = "home";
      for (const id of sections) {
        const section = document.getElementById(id);
        if (section && window.scrollY >= section.offsetTop - 100) {
          current = id;
        }
      }
      setActiveId(current);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const renderNavLink = (id) => (
    <a
      key={id}
      href={`#${id}`}
      onClick={() => {
        setActiveId(id);
        setIsOpen(false);
      }}
      className={`nav-link ${activeId === id ? "active" : ""}`}
    >
      {id.charAt(0).toUpperCase() + id.slice(1)}
    </a>
  );

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar-container">
          <img src={logo} alt='Logo' className='logo' />

          <div className="nav-desktop">
            {sections.map((id) => renderNavLink(id))}

          </div>

          <div className="nav-mobile-toggle">

            <button onClick={toggleMenu} className="hamburger">
              <svg className="hamburger-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="nav-mobile-menu">
            {sections.map((id) => renderNavLink(id))}
          </div>
        )}
      </nav>

      <div id="home" className="section-home">
        <div className="container">
          <Intro />
        </div>
        <div id="about" className="section-about">
          <div className="container">
            <About />
          </div>
        </div>
        <div id="experience" className="section-experience">
          <div className="container">
            <Experience />
          </div>
        </div>
        <div id="projects" className="section-projects">
          <div className="container">
            <Projects />
          </div>
        </div>
        <div id="contact" className="section-contact">
          <div className="container">
            <h1 className="contact-heading">Contact Me</h1>
            <Contact />
          </div>
        </div>
      </div>

      <div id="footer" className="footer">
        <div className="container">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Navbar;
