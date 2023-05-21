import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import "./Navbar.css";

const Navbar = () => {
  const [sideBarOpen, setSideBarOpen] = useState<boolean>(false);

  const toggleSideBar = () => {
    setSideBarOpen(!sideBarOpen);
  };

  return (
    <nav>
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
            <span>03.</span> Work
          </a>
        </li>
        <li>
          <a href="">
            <span>04.</span> Contact
          </a>
        </li>
      </ul>
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
              <span>03.</span> Work
            </a>
          </li>
          <li>
            <a href="">
              <span>04.</span> Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
