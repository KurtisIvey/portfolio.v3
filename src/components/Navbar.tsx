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
      <div id="sideBar" className={sideBarOpen ? "sideBarOpen" : ""}>
        <ul>
          <hr />
          <li>
            <span>01.</span> About
          </li>
          <li>
            <span>02.</span> Skills
          </li>
          <li>
            <span>03.</span> Work
          </li>
          <li>
            <span>04.</span> Contact
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
