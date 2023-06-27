import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import "./Navbar.css";
import useWindowWidth from "../../hooks/useWindowWidth";
import SmallNavbar from "./SmallNavbar/SmallNavbar";
import LargeNavbar from "./LargeNavbar/LargeNavbar";

const Navbar = () => {
  // prevents unnecessary rendering of both sidebars at once by detecting window width
  // windowWidth becomes the measurement for the ternary operator
  const windowWidth = useWindowWidth();
  const [sideBarOpen, setSideBarOpen] = useState(false);

  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    // closes sidebar on click if it's open
    if (sideBarOpen) setSideBarOpen(false);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    // upon resizing, automatically closes sidebar, so it isn't open if I resize down
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
        <SmallNavbar
          sideBarOpen={sideBarOpen}
          setSideBarOpen={setSideBarOpen}
          handleScrollToSection={handleScrollToSection}
        />
      ) : (
        <LargeNavbar handleScrollToSection={handleScrollToSection} />
      )}
    </motion.header>
  );
};

export default Navbar;
