import { useState, useEffect, useCallback } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

import "./Navbar.css";
import useWindowWidth from "../../hooks/useWindowWidth";

const Navbar = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  // prevents unnecessary rendering of both sidebars at once by detecting window width
  // windowWidth becomes the measurement for the ternary operator
  const windowWidth = useWindowWidth();
  const toggleSideBar = useCallback(() => {
    setSideBarOpen((prevOpen) => !prevOpen);
  }, []);

  useEffect(() => {
    if (sideBarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [sideBarOpen]);

  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    // closes sidebar on click if it's open
    if (sideBarOpen) setSideBarOpen(false);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (windowWidth >= 770) setSideBarOpen(false);
  }, [windowWidth]);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      transition={{ delay: 3, duration: 2 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <h1>
        Kurtis <span>Ivey</span>
      </h1>
      {windowWidth < 770 ? (
        <>
          {sideBarOpen && <div className="blur-filter" />}{" "}
          <nav>
            <button
              className={`hamburger-container ${sideBarOpen ? "open" : ""}`}
              onClick={toggleSideBar}
              aria-label={sideBarOpen ? "Close Menu" : "Open Menu"}
              aria-expanded={sideBarOpen}
            >
              {sideBarOpen ? (
                <AiOutlineClose size={45} className="hamburger" />
              ) : (
                <BiMenuAltRight size={45} className="hamburger" />
              )}
            </button>
            <div
              id="sideBar"
              className={sideBarOpen ? "sideBarOpen" : ""}
              role="menu"
              aria-label="Main Menu"
            >
              <ul role="menu">
                <hr />
                <li role="none">
                  <button
                    onClick={() => handleScrollToSection("about")}
                    aria-label="About Section"
                    role="menuitem"
                  >
                    <span>01.</span> About
                  </button>
                </li>
                <li role="none">
                  <button
                    onClick={() => handleScrollToSection("skills")}
                    aria-label="Skills Section"
                    role="menuitem"
                  >
                    <span>02.</span> Skills
                  </button>
                </li>
                <li role="none">
                  <button
                    onClick={() => handleScrollToSection("projects")}
                    aria-label="Projects Section"
                    role="menuitem"
                  >
                    <span>03.</span> Projects
                  </button>
                </li>
                <li role="none">
                  <button
                    onClick={() => handleScrollToSection("contact")}
                    aria-label="Contact Section"
                    role="menuitem"
                  >
                    <span>04.</span> Contact
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        </>
      ) : (
        <nav className="navLargerResNavLinks">
          <ul id="largerResNavLinks" role="menu">
            <li role="none">
              <button
                onClick={() => handleScrollToSection("about")}
                aria-label="About Section"
                role="menuitem"
              >
                <span>01.</span> About
              </button>
            </li>
            <li role="none">
              <button
                onClick={() => handleScrollToSection("skills")}
                aria-label="Skills Section"
                role="menuitem"
              >
                <span>02.</span> Skills
              </button>
            </li>
            <li role="none">
              <button
                onClick={() => handleScrollToSection("projects")}
                aria-label="Projects Section"
                role="menuitem"
              >
                <span>03.</span> Projects
              </button>
            </li>
            <li role="none">
              <button
                onClick={() => handleScrollToSection("contact")}
                aria-label="Contact Section"
                role="menuitem"
              >
                <span>04.</span> Contact
              </button>
            </li>
          </ul>
        </nav>
      )}
    </motion.header>
  );
};

export default Navbar;
