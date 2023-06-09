import React from "react";
import "./Projects.css";
import useWindowWidth from "../../hooks/useWindowWidth";

const Projects: React.FC = () => {
  // custom hook to detect window size so I can conditionally render specific project card
  const windowWidth = useWindowWidth();
  return (
    <section className="projectsSection">
      <h1>
        <span>02.</span> Projects
      </h1>
    </section>
  );
};

export default Projects;
