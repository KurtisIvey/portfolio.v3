import React from "react";
import "./Solutions.css";
import { BsGearWideConnected } from "react-icons/bs";
import { FaPaintBrush, FaHammer } from "react-icons/fa";

const Solutions: React.FC = () => {
  return (
    <div className="solutions-container">
      <h1 className="">Services I Offer</h1>
      <div className="shields-container">
        <div className="shield-box">
          <div className="hexagon-shield">
            <BsGearWideConnected size={70} className="rotate" />
          </div>
          <h2>Custom Web Solutions</h2>
          <p>
            I provide custom web solutions using modern technologies like React,
            TypeScript, JavaScript, HTML, CSS, Node.js, Express, & MongoDB to
            create tailored, scalable, & efficient web applications for your
            specific needs.
          </p>
        </div>
        <div className="shield-box">
          <div className="hexagon-shield">
            <FaPaintBrush size={44} className="paint" />
          </div>
          <h2>Responsive UX Design</h2>
          <p>
            I specialize in Responsive UX design, leveraging styling libraries,
            frameworks, & industry best practices. With a focus on adaptability
            & user-centered experiences, I create interfaces that seamlessly
            adjust to various devices, ensuring optimal usability & visual
            appeal.
          </p>
        </div>
        <div className="shield-box">
          <div className="hexagon-shield">
            <FaHammer size={60} className="hammer" />
          </div>
          <h2>Web Maintenance & IT Support</h2>
          <p>
            I specialize in providing website maintenance & IT support services.
            I am committed to delivering ongoing updates, IT support, &
            maintenance to ensure your website operates smoothly & meets your
            evolving needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
