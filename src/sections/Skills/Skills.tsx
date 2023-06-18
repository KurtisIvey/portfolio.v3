import React from "react";
import "./Skills.css";
import skills from "../../assets/skillLogos/skillLogos";
import { v4 as uuidv4 } from "uuid";
import SkillLogo from "../../components/SkillLogo/SkillLogo";

const Skills = (props: Props) => {
  return (
    <section className="skillsSection subSection">
      <h1 className="sectionH1">
        <span>02. </span>Skills
      </h1>
      <div className="logosContainer">
        {skills.map((skill) => (
          <div key={uuidv4()} className="logo">
            <SkillLogo {...skill} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
