import React from "react";
import "./Skills.css";
import skills from "../../assets/skillLogos/skillLogos";
import { v4 as uuidv4 } from "uuid";

const Skills = (props: Props) => {
  return (
    <section className="skillsSection">
      <h1>
        <span>02. </span>Skills
      </h1>
      <div className="logosContainer">
        {skills.map((skill) => (
          <div key={uuidv4()} className="logo">
            <img src={skill.url} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
