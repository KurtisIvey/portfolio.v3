import React from "react";
import "./SmallResProjectCard.css";
import { BsGithub, BsGlobe } from "react-icons/bs";
import { ProjectInterface } from "../project.types";
import { v4 as uuidv4 } from "uuid";

const SmallResProjectCard = (props: ProjectInterface) => {
  return (
    <div key={uuidv4()} className="mobileProjectCard">
      <div className="top">
        <h2>{props.name}</h2>
        <div className="links">
          <a href={props.repo} aria-label="github repo link">
            <BsGithub size={25} />
          </a>{" "}
          <a href={props.website} aria-label="website link">
            <BsGlobe size={25} />
          </a>
        </div>
      </div>
      <img src={props.img} />
      <p className="techStack">
        <span>Tech Used:</span> {props.techStack}
      </p>
      <p className="description">{props.description}</p>
    </div>
  );
};

export default SmallResProjectCard;
