import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector(".navbar-expand-md");
      if (window.pageYOffset > 50) {
        nav?.classList.add("navbar-reduce");
        nav?.classList.remove("navbar-trans");
      } else {
        nav?.classList.add("navbar-trans");
        nav?.classList.remove("navbar-reduce");
      }

      const sections = ["home", "work", "about", "contact"];
      const scrollPosition = window.pageYOffset + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const nav = document.querySelector("nav");
      const navHeight = nav ? nav.offsetHeight : 80;
      const targetPosition = targetElement.offsetTop - navHeight + 5;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav
      className="navbar navbar-b navbar-trans navbar-expand-md fixed-top"
      id="mainNav"
    >
      <div className="container">
        <a 
          className="navbar-brand" 
          href="#page-top" 
          onClick={(e) => handleLinkClick(e, "home")}
          style={{fontWeight: 'bold', fontSize: '1.2rem'}}
        >
          Yeudi Martínez Sánchez
        </a>
        <button
          className={`navbar-toggler ${isOpen ? '' : 'collapsed'}`}
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="navbarDefault"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div
          className={`navbar-collapse collapse justify-content-end ${isOpen ? 'show' : ''}`}
          id="navbarDefault"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a 
                className={`nav-link ${activeSection === "home" ? "active" : ""}`} 
                href="#home"
                onClick={(e) => handleLinkClick(e, "home")}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${activeSection === "work" ? "active" : ""}`} 
                href="#work"
                onClick={(e) => handleLinkClick(e, "work")}
              >
                Work
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${activeSection === "about" ? "active" : ""}`} 
                href="#about"
                onClick={(e) => handleLinkClick(e, "about")}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${activeSection === "contact" ? "active" : ""}`} 
                href="#contact"
                onClick={(e) => handleLinkClick(e, "contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
