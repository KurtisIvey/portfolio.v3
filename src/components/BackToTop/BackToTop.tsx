import React from "react";
import "./BackToTop.css";
import { BsArrowUpCircleFill } from "react-icons/bs";

const BackToTop: React.FC = () => {
  const scrollToTop = () => {
    const section = document.getElementById("top");
    section && section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="back-to-top">
      <button onClick={scrollToTop} className="back-to-top-button">
        <BsArrowUpCircleFill size={50} />
      </button>
    </div>
  );
};

export default BackToTop;
