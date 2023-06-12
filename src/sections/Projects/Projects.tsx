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
      description:
        "Space Tourism is an interactive website that allows one to explore the different possible destinations should they decide to embark on an out of this world vacation. User's are able to explore the different destinations, the crew members, and the associated technologies that will be used in their space journey.",
    },
  ];
  return (
    <section className="projectsSection">
      <h1>
        <span>02.</span> Projects
      </h1>
      {tester.map((test) => (
        <section key={test.name} className="mobileProjectCard">
          <div className="top">
            <h2>{test.name}</h2>
            <div className="links">
              <a href={test.repo} aria-label="github repo link">
                <BsGithub size={25} />
              </a>{" "}
              <a href={test.website} aria-label="website link">
                <BsGlobe size={25} />
              </a>
            </div>
          </div>
          <img src={test.img} />
          <div></div>

          <p>{test.techStack}</p>
          <p>{test.description}</p>
        </section>
      ))}
    </section>
  );
};

export default Projects;
