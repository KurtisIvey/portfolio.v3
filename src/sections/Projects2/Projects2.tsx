import React, { useEffect, useRef } from "react";
import "./Projects2.css";

import useWindowWidth from "../../hooks/useWindowWidth";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { projects } from "../../assets/previews/previews";
import { v4 as uuidv4 } from "uuid";
import { BsGithub, BsGlobe } from "react-icons/bs";

const Projects2: React.FC = () => {
  // custom hook to detect window size so I can conditionally render specific project card
  const windowWidth = useWindowWidth();
  // lim set to 770px wide to switch view
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the animation only once when the div enters the viewport
  });
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const imgContainer = imgRef.current;

    const handleMouseEnter = () => {
      if (imgContainer) {
        imgContainer.style.zIndex = "3";
      }
    };
    const handleMouseLeave = () => {
      if (imgContainer) {
        imgContainer.style.zIndex = "initial";
      }
    };
    if (imgContainer) {
      imgContainer.addEventListener("mouseenter", handleMouseEnter);
      imgContainer.addEventListener("mouseleave", handleMouseLeave);
    }
    return () => {
      if (imgContainer) {
        imgContainer.removeEventListener("mouseenter", handleMouseEnter);
        imgContainer.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  useEffect(() => {
    if (inView) {
      // motion features definied here to be used on the section element
      controls.start({ opacity: 1, transition: { duration: 1.8 } });
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      className="projects-section sub-section"
      // id present to allow header click navigation
      id="projects"
      initial={{ opacity: 0 }}
      animate={controls}
    >
      <h1 className="section-h1">
        <span>03.</span> Projects
      </h1>
      {projects.map((project) => (
        <div key={uuidv4()} className="card">
          {/* small project card */}
          <article className="mobile-project-card">
            <div className="top">
              <h2>
                <a href={project.website}>{project.name}</a>
              </h2>
              <div className="links">
                <a
                  href={project.repo}
                  aria-label={`${project.name} GitHub Repository`}
                  title="GitHub Repository"
                  tabIndex={0}
                >
                  <BsGithub size={25} />
                </a>
                <a
                  href={project.website}
                  aria-label={`${name} Website`}
                  title="Website"
                  tabIndex={0}
                >
                  <BsGlobe size={25} />
                </a>
              </div>
            </div>
            <img src={project.img} alt={project.name} />
            <p className="tech-stack">
              <span>Tech Used:</span> {project.techStack}
            </p>
            <p className="description">{project.description}</p>
          </article>
          {/* large project card */}
          <article className="large-project-card">
            <div className="img-wrapper" ref={imgRef}>
              {/* issues with videos autoplaying on small res devices, so gif is rendered instead */}
              {windowWidth > 1000 ? (
                <video src={project.mp4} autoPlay muted loop>
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img src={project.img} alt={project.name} />
              )}
              {windowWidth > 1100 && <div className="color-overlay" />}
            </div>
            <div className="tech-stack">
              <span>Tech Used: </span>
              {project.techStack}
            </div>
            {/* positioned absolutely */}
            <h2>
              <a href={project.website}>{project.name}</a>
            </h2>
            {/* floating description and links */}
            <div className="floating-box">
              <p>{project.description}</p>
              <div className="links">
                <a href={project.repo} aria-label="github repo link">
                  <div>Github Repository</div>
                  <BsGithub size={20} />
                </a>
                <a href={project.website} aria-label="website link">
                  Website <BsGlobe size={20} />
                </a>
              </div>
            </div>
          </article>
        </div>
      ))}
    </motion.section>
  );
};

export default Projects2;
