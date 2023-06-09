import { useState, useEffect, useCallback } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

import "./Navbar.css";
import useWindowWidth from "../../hooks/useWindowWidth";

const Navbar = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
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

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      transition={{ delay: 3, duration: 2 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <h1>
        Kurtis <span>Ivey</span>
      </h1>
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

      {windowWidth < 770 ? (
        <>
          {sideBarOpen && <div className="blurFilter" />}

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
        </>
      ) : (
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
      )}
    </motion.nav>
  );
};

export default Navbar;
