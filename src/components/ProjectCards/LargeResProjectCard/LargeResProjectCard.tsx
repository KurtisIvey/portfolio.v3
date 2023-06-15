import "./LargeResProjectCard.css";
import { useRef, useEffect } from "react";
import { BsGithub, BsGlobe } from "react-icons/bs";
import { ProjectInterface } from "../project.types";
import { v4 as uuidv4 } from "uuid";

const LargeResProjectCard = (props: ProjectInterface) => {
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

  return (
    <div className="largeResProjectCard">
      <div className="imgWrapper" ref={imgRef}>
        <img src={props.img} alt={props.name} />
        <div className="color-overlay"></div>
      </div>
      <div className="techStack">
        <span>Tech Used: </span>
        {props.techStack}
      </div>
      {/* positioned absolutely */}
      <h2>
        <em>{props.name}</em>
      </h2>
      {/* floating description and links */}
      <div className="floatingBox">
        <p>{props.description}</p>
        <div className="links">
          <a href={props.repo} aria-label="github repo link">
            <div>Github Repository</div>
            <BsGithub size={20} />
          </a>
          <a href={props.website} aria-label="website link">
            Website <BsGlobe size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LargeResProjectCard;
