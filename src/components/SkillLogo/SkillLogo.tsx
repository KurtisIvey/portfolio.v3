import React from "react";
import "./SkillLogo.css";
import { SkillsInterface } from "./SkillLogo.types";

const SkillLogo: React.FC<SkillsInterface> = ({ name, url }) => {
  return (
    <>
      <img src={url} alt={name} />
      <p>{name}</p>
    </>
  );
};

export default SkillLogo;
