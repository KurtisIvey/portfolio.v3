import { useState, useEffect, useCallback } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

import "./Navbar.css";
// custom hook to detect window width
import useWindowWidth from "../../hooks/useWindowWidth";

const Navbar = () => {
  const [sideBarOpen, setSideBarOpen] = useState<boolean>(false);
  // custom hook to detect window width
  const windowWidth = useWindowWidth();

  // handle open close side bar at mobile res
  const toggleSideBar = useCallback(() => {
    setSideBarOpen((prevOpen) => !prevOpen);
  }, []);

  useEffect(() => {
    // detects window width via useWindowWidth hook and then handles closing sideBar
    // when res is larger than mobile, so on resizing from mobile - desk - mobile,
    // it isn't open
    if (windowWidth >= 769 && sideBarOpen === true) {
      setSideBarOpen(false);
    }
  }, [windowWidth, sideBarOpen]);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      // manually set delay to appear after logo that shows on initial page load
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
        <li>
          <a href="">
            <span>01.</span> About
          </a>
        </li>
        <li>
          <a href="">
            <span>02.</span> Skills
          </a>
        </li>
        <li>
          <a href="">
            <span>03.</span> Projects
          </a>
        </li>
        <li>
          <a href="">
            <span>04.</span> Contact
          </a>
        </li>
      </ul>
      {sideBarOpen && <div className="blurFilter" />}

      <div id="sideBar" className={sideBarOpen ? "sideBarOpen" : ""}>
        <ul>
          <hr />
          <li>
            <a href="">
              <span>01.</span> About
            </a>
          </li>
          <li>
            <a href="">
              <span>02.</span> Skills
            </a>
          </li>
          <li>
            <a href="">
              <span>03.</span> Projects
            </a>
          </li>
          <li>
            <a href="">
              <span>04.</span> Contact
            </a>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
