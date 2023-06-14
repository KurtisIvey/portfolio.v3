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
        <SmallResProjectCard
          name={test.name}
          repo={test.repo}
          website={test.website}
          img={test.img}
          techStack={test.techStack}
          description={test.description}
        />
      ))}
    </section>
  );
};

export default Projects;
