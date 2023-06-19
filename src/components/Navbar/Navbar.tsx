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
          {sideBarOpen && <div className="blurFilter" />}{" "}
          <nav>
            <div
              className={`hamburgerContainer ${sideBarOpen ? "open" : ""}`}
              onClick={toggleSideBar}
              aria-label={sideBarOpen ? "Close Menu" : "Open Menu"}
            >
              {sideBarOpen ? (
                <AiOutlineClose size={45} className="hamburger" />
              ) : (
                <BiMenuAltRight size={45} className="hamburger" />
              )}
            </div>
            <div id="sideBar" className={sideBarOpen ? "sideBarOpen" : ""}>
              <ul>
                <hr />
                <li onClick={() => handleScrollToSection("about")}>
                  <span>01.</span> About
                </li>
                <li onClick={() => handleScrollToSection("skills")}>
                  <span>02.</span> Skills
                </li>
                <li onClick={() => handleScrollToSection("projects")}>
                  <span>03.</span> Projects
                </li>
                <li onClick={() => handleScrollToSection("contact")}>
                  <span>04.</span> Contact
                </li>
              </ul>
            </div>
          </nav>
        </>
      ) : (
        <nav className="navLargerResNavLinks">
          <ul id="largerResNavLinks">
            <li onClick={() => handleScrollToSection("about")}>
              <span>01.</span> About
            </li>
            <li onClick={() => handleScrollToSection("skills")}>
              <span>02.</span> Skills
            </li>
            <li onClick={() => handleScrollToSection("projects")}>
              <span>03.</span> Projects
            </li>
            <li onClick={() => handleScrollToSection("contact")}>
              <span>04.</span> Contact
            </li>
          </ul>
        </nav>
      )}
    </motion.header>
  );
};

export default Navbar;
