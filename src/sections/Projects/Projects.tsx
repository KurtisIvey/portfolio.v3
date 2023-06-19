import React, { useEffect } from "react";
import "./Projects.css";
import useWindowWidth from "../../hooks/useWindowWidth";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { projects } from "../../assets/previews/previews";
import SmallResProjectCard from "../../components/ProjectCards/SmallResProjectCard/SmallResProjectCard";
import LargeResProjectCard from "../../components/ProjectCards/LargeResProjectCard/LargeResProjectCard";
import { v4 as uuidv4 } from "uuid";

const Projects: React.FC = () => {
  // custom hook to detect window size so I can conditionally render specific project card
  const windowWidth = useWindowWidth();
  // lim set to 770px wide to switch view
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the animation only once when the div enters the viewport
  });

  useEffect(() => {
    if (inView) {
      // motion features definied here to be used on the section element
      controls.start({ opacity: 1, transition: { duration: 1.8 } });
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      className="projectsSection subSection"
      id="projects"
      initial={{ opacity: 0 }}
      animate={controls}
    >
      <h1 className="sectionH1">
        <span>03.</span> Projects
      </h1>
      {projects.map((project) => (
        <div key={uuidv4()} className="card">
          {windowWidth < 770 ? (
            <SmallResProjectCard {...project} />
          ) : (
            <LargeResProjectCard {...project} />
          )}
        </div>
      ))}
    </motion.section>
  );
};

export default Projects;
