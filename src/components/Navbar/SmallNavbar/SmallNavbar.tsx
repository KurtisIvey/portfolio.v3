import React from "react";
import "./SmallNavbar.css";
import { useCallback } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
type Props = {
  handleScrollToSection: (sectionId: string) => void;
  sideBarOpen: boolean;
  setSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SmallNavbar = ({
  handleScrollToSection,
  sideBarOpen,
  setSideBarOpen,
}: Props) => {
  const toggleSideBar = useCallback(() => {
    setSideBarOpen((prevOpen) => !prevOpen);
  }, [setSideBarOpen]);

  return (
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
          id="side-bar"
          className={sideBarOpen ? "side-bar-open" : ""}
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
  );
};

export default SmallNavbar;
