import React from "react";
import "./Projects.css";
import useWindowWidth from "../../hooks/useWindowWidth";
import testImg from "../../assets/previews/space-Tourism.gif";

import { BsGithub, BsGlobe } from "react-icons/bs";

const Projects: React.FC = () => {
  // custom hook to detect window size so I can conditionally render specific project card
  const windowWidth = useWindowWidth();

  const tester = [
    {
      name: "Space Tourism",
      img: testImg,
      repo: "https://github.com/KurtisIvey/space-tourism-nextjs",
      website: "https://space-tourism-nextjs-uu85.vercel.app/",
      techStack: "TypeScript, Next.js, React, Sass",
    },
  ];
  return (
    <section className="projectsSection">
      <h1>
        <span>02.</span> Projects
      </h1>
      {tester.map((test) => (
        <div key={test.name} className="mobileProjectCard">
          <h2>{test.name}</h2>
          <img src={test.img} />
          <div className="links">
            <a href={test.repo}>
              <BsGithub />
            </a>{" "}
            <a href={test.website}>
              <BsGlobe />
            </a>
          </div>
          <p>{test.techStack}</p>
        </div>
      ))}
    </section>
  );
};

export default Projects;
