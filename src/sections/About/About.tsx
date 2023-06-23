import React, { useRef, useEffect, useState, useCallback } from "react";
import "./About.css";
import headshot from "../../assets/headshot.jpeg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import useWindowWidth from "../../hooks/useWindowWidth";

const About: React.FC = () => {
  const controls = useAnimation();
  const windowWidth = useWindowWidth();
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the animation only once when the div enters the viewport
  });
  const aboutImgContainerRef = useRef<HTMLDivElement>(null);
  const [hoveringOnHeadshot, setHoveringOnHeadshot] = useState<boolean>(false);

  const handleMouseEnter = useCallback(() => {
    // animation dependent on state enabled via className ternary when entering
    setHoveringOnHeadshot(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    // animation dependent on state false disabled via className ternary when exiting
    setHoveringOnHeadshot(false);
  }, []);

  useEffect(() => {
    if (inView) {
      // motion features definied here to be used on the section element
      controls.start({ opacity: 1, transition: { duration: 1.3 } });
    }
  }, [controls, inView]);

  useEffect(() => {
    const aboutImgContainer = aboutImgContainerRef.current;
    if (aboutImgContainer) {
      aboutImgContainer.addEventListener("mouseenter", handleMouseEnter);
      aboutImgContainer.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (aboutImgContainer) {
        aboutImgContainer.removeEventListener("mouseenter", handleMouseEnter);
        aboutImgContainer.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [handleMouseEnter, handleMouseLeave]);

  return (
    <motion.section
      className="about-section sub-section"
      id="about"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={controls}
    >
      <h1 className="sectionH1">
        <span>01.</span> About Me
      </h1>
      <div ref={aboutImgContainerRef} className="about-img-container">
        <div className="img-wrapper">
          <img src={headshot} alt="Kurtis Ivey's profile photo" />
          {windowWidth > 1100 && <div className="color-overlay" />}
        </div>
        <div
          className={`behind-box ${hoveringOnHeadshot ? "hovered" : ""}`}
        ></div>
      </div>
      <article className="about-text-container">
        <p>
          Hey there! My name is Kurtis & I'm an{" "}
          <span>experienced software developer </span>
          proficient in building front & back end apps. Through colloborative
          efforts with local & remote teams, I've contributed to the development
          of <span>cutting-edge, industry-standard applications.</span>{" "}
          Witnessing the impact of technology in our interconnected world fueled
          my passion for coding & creating <span>visually appealing</span>,{" "}
          <span>responsive</span>, & <span>user-friendly</span> websites.
        </p>
        <p>
          Currently, I'm working with{" "}
          <a href="https://www.onecommunityglobal.org/">One Community Global</a>{" "}
          as a Developer using JavaScript, React, Node.js, Express, & MongoDB.
        </p>
        <p>
          When I'm not coding, I'm spending my time as a{" "}
          <span style={{ color: "rgba(210, 124, 124)" }}>loving husband</span> &
          <span> Brazilian Jiu Jitsu student/instructor 🥋</span>
        </p>
        <p>
          <span>Fun Fact:</span> I've traveled a distance that is equivalent to
          circling the Earth 28 times while trucking, so I'm pretty much a
          professional at sitting on my butt.
        </p>
      </article>
    </motion.section>
  );
};

export default About;
