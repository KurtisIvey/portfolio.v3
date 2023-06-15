import React, { useEffect } from "react";
import "./Projects.css";
import useWindowWidth from "../../hooks/useWindowWidth";
import testImg from "../../assets/previews/space-Tourism.gif";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { projects } from "../../assets/previews/previews";
import SmallResProjectCard from "../../components/ProjectCards/SmallResProjectCard/SmallResProjectCard";
import LargeResProjectCard from "../../components/ProjectCards/LargeResProjectCard/LargeResProjectCard";

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
      controls.start({ opacity: 1, transition: { duration: 1.3 } });
    }
  }, [controls, inView]);

  /* const projects = [
    {
      name: "Space Tourism",
      img: testImg,
      repo: "https://github.com/KurtisIvey/space-tourism-nextjs",
      website: "https://space-tourism-nextjs-uu85.vercel.app/",
      techStack: "TypeScript, Next.js, React, Sass",
      description:
        "Space Tourism is an interactive website that allows one to explore the different possible destinations should they decide to embark on an out of this world vacation. User's are able to explore the different destinations, the crew members, and the associated technologies that will be used in their space journey.",
    },
  ]; */
  return (
    <motion.section
      ref={ref}
      className="projectsSection"
      id="projects"
      initial={{ opacity: 0 }}
      animate={controls}
    >
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
    </motion.section>
  );
};

export default Projects;
