import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="">
      <div className="">
        <span className="">
          © 2023{" "}
          <a href="https://github.com/KurtisIvey" className="hover:underline">
            Kurtis Ivey Coding
          </a>
          . All Rights Reserved.
        </span>
        <ul className="">
          <li>
            <a href="https://github.com/KurtisIvey/portfolio.v3" className="">
              Github Repo
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/kurtisivey/" className="">
              Linkedin
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
