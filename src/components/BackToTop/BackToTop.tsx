import React, { useState, useEffect } from "react";
import "./BackToTop.css";

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    const isVisible = scrollTop > 0;
    setIsVisible(isVisible);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="back-to-top">
      {isVisible ? (
        <button onClick={scrollToTop} className="back-to-top-button">
          Back to top
        </button>
      ) : null}
    </div>
  );
};

export default BackToTop;
