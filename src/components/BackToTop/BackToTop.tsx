import React, { useState, useEffect } from "react";
import "./BackToTop.css";

const BackToTop: React.FC = () => {
  const [showButton, setShowButton] = useState(true);

  // Scroll event listener to show/hide the button
  const handleScroll = () => {
    console.log(window.scrollY);
    // if (window.scrollY > 300) {
    //   setShowButton(true);
    //   console.log("hi");
    // } else {
    //   setShowButton(false);
    // }
  };
  // Scroll to top when the button is clicked

  const scrollToTop = () => {
    const section = document.getElementById("top");
    section && section.scrollIntoView({ behavior: "smooth" });
  };

  // Attach scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="back-to-top">
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top-button">
          Back to top
        </button>
      )}
    </div>
  );
};

export default BackToTop;
