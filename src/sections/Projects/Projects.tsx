import React from "react";
import "./Projects.css";
import useWindowWidth from "../../hooks/useWindowWidth";
import testImg from "../../assets/previews/space-Tourism.gif";

import { BsGithub, BsGlobe } from "react-icons/bs";
import SmallResProjectCard from "../../components/SmallResProjectCard/SmallResProjectCard";

const Projects: React.FC = () => {
  // custom hook to detect window size so I can conditionally render specific project card
  const windowWidth = useWindowWidth();
  // lim set to 770px wide to switch view

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
        <div className="tabletPlusProjectCard">
          <div className="imgWrapper">
            <img src={test.img} alt="Kurtis Ivey's profile photo" />
            <div className="color-overlay"></div>
          </div>
          <div className="techStack">{test.techStack}</div>
          {/* positioned absolutely */}
          <h2>
            <em>{test.name}</em>
          </h2>
          {/* floating description and links */}
          <div className="floatingBox">
            <p>{test.description}</p>
            <div className="links">
              <a href={test.repo} aria-label="github repo link">
                <span>Github Repository</span>
                <BsGithub size={25} />
              </a>{" "}
              <a href={test.website} aria-label="website link">
                Website <BsGlobe size={25} />
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
