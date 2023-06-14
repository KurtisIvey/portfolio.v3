import React from "react";
import "./Projects.css";
import useWindowWidth from "../../hooks/useWindowWidth";
import testImg from "../../assets/previews/space-Tourism.gif";

import SmallResProjectCard from "../../components/ProjectCards/SmallResProjectCard/SmallResProjectCard";
import LargeResProjectCard from "../../components/ProjectCards/LargeResProjectCard/LargeResProjectCard";

const Projects: React.FC = () => {
  // custom hook to detect window size so I can conditionally render specific project card
  const windowWidth = useWindowWidth();
  // lim set to 770px wide to switch view

  const projects = [
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
        <span>03.</span> Projects
      </h1>
      {projects.map((project) =>
        windowWidth < 770 ? (
          <SmallResProjectCard
            name={project.name}
            img={project.img}
            repo={project.repo}
            website={project.website}
            techStack={project.techStack}
            description={project.description}
          />
        ) : (
          <LargeResProjectCard
            name={project.name}
            img={project.img}
            repo={project.repo}
            website={project.website}
            techStack={project.techStack}
            description={project.description}
          />
        )
      )}
    </section>
  );
};

export default Projects;
