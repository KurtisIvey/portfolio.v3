import "./LargeResProjectCard.css";
import { useRef, useEffect } from "react";
import { BsGithub, BsGlobe } from "react-icons/bs";
import { ProjectInterface } from "../project.types";
import useWindowWidth from "../../../hooks/useWindowWidth";

const LargeResProjectCard = ({
  img,
  name,
  techStack,
  description,
  repo,
  website,
}: ProjectInterface) => {
  const windowWidth = useWindowWidth();
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
    <article className="largeResProjectCard">
      <div className="imgWrapper" ref={imgRef}>
        <video src={img} autoPlay muted loop>
          Your browser does not support the video tag.
        </video>
        <div className="color-overlay"></div>
      </div>
      <div className="techStack">
        <span>Tech Used: </span>
        {techStack}
      </div>
      {/* positioned absolutely */}
      <h2>
        <em>{name}</em>
      </h2>
      {/* floating description and links */}
      <div className="floatingBox">
        <p>{description}</p>
        <div className="links">
          <a href={repo} aria-label="github repo link">
            <div>Github Repository</div>
            <BsGithub size={20} />
          </a>
          <a href={website} aria-label="website link">
            Website <BsGlobe size={20} />
          </a>
        </div>
      </div>
    </article>
  );
};

export default LargeResProjectCard;
