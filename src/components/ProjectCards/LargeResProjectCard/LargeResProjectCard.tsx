import "./LargeResProjectCard.css";
import { useRef, useEffect } from "react";
import { BsGithub, BsGlobe } from "react-icons/bs";
import { ProjectInterface } from "../project.types";
import useWindowWidth from "../../../hooks/useWindowWidth";

const LargeResProjectCard = ({
  img,
  mp4,
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
    <article className="large-project-card">
      <div className="img-wrapper" ref={imgRef}>
        {/* issues with videos autoplaying on small res devices, so gif is rendered instead */}
        {windowWidth > 1000 ? (
          <video src={mp4} autoPlay muted loop>
            Your browser does not support the video tag.
          </video>
        ) : (
          <img src={img} alt={name} />
        )}
        {windowWidth > 1100 && <div className="color-overlay" />}
      </div>
      <div className="tech-stack">
        <span>Tech Used: </span>
        {techStack}
      </div>
      {/* positioned absolutely */}
      <h2>
        <a href={website}>{name}</a>
      </h2>
      {/* floating description and links */}
      <div className="floating-box">
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
