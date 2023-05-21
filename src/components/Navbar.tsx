import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import "./Navbar.css";

type Props = {};

const Navbar = (props: Props) => {
  const [sideBarOpen, setSideBarOpen] = useState<boolean>(false);

  const toggleSideBar = () => {
    setSideBarOpen(!sideBarOpen);
  };

  return (
    <nav>
      <h1>Kurtis Ivey</h1>
      <div
        className={`hamburgerContainer ${sideBarOpen ? "open" : ""}`}
        onClick={toggleSideBar}
      >
        {sideBarOpen ? (
          <AiOutlineClose size={40} className="hamburger" />
        ) : (
          <BiMenuAltRight size={40} className="hamburger" />
        )}
      </div>
      <div id="sideBar" className={sideBarOpen ? "sideBarOpen" : ""}>
        <ul>
          <hr />
          <li>01. About</li>
          <li>02. Experience</li>
          <li>03. Work</li>
          <li>04. Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
