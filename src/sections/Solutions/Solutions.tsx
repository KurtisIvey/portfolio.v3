import React from "react";
import "./Solutions.css";
import { BsGearWideConnected } from "react-icons/bs";

const Solutions = () => {
  return (
    <div className="solutionsContainer">
      <h1 className="sectionH1">Services I Offer</h1>
      <div className="shieldBox">
        <div className="hexagon-shield">
          <BsGearWideConnected size={75} className="rotate" />
        </div>
        <h2>Custom Web Solutions</h2>
        <p>
          I provide custom web solutions using modern technologies like React,
          TypeScript, JavaScript, HTML, CSS, Node.js, Express, and MongoDB to
          create tailored, scalable, and efficient web applications for your
          specific needs.
        </p>
      </div>
    </div>
  );
};

export default Solutions;
