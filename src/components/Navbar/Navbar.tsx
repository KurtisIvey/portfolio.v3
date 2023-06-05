import { useState, useEffect, useCallback } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

import "./Navbar.css";

const Navbar: React.FC = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);

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
      >
        {sideBarOpen ? (
          <AiOutlineClose size={45} className="hamburger" />
        ) : (
          <BiMenuAltRight size={45} className="hamburger" />
        )}
      </div>
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
    </motion.nav>
  );
};

export default Navbar;
