import React, { useEffect } from "react";
import "./Skills.css";
import skills from "../../assets/skillLogos/skillLogos";
import { v4 as uuidv4 } from "uuid";
import SkillLogo from "../../components/SkillLogo/SkillLogo";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Skills: React.FC = () => {
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
  return (
    <motion.section
      ref={ref}
      className="skills-section sub-section"
      id="skills"
      initial={{ opacity: 0 }}
      animate={controls}
    >
      <h1 className="section-h1">
        <span>02. </span>Skills
      </h1>
      <div className="logos-container">
        {skills.map((skill) => (
          <div key={uuidv4()} className="logo">
            <SkillLogo {...skill} />
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
