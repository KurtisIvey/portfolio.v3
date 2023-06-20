import "./SmallResProjectCard.css";
import { BsGithub, BsGlobe } from "react-icons/bs";
import { ProjectInterface } from "../project.types";

const SmallResProjectCard = ({
  img,
  name,
  techStack,
  description,
  repo,
  website,
}: ProjectInterface) => {
  return (
    <article className="mobileProjectCard">
      <div className="top">
        <h2>{name}</h2>
        <div className="links">
          <a href={repo} aria-label="github repo link">
            <BsGithub size={25} />
          </a>
          <a href={website} aria-label="website link">
            <BsGlobe size={25} />
          </a>
        </div>
      </div>
      <video src={img} autoPlay muted loop controls>
        Your browser does not support the video tag.
      </video>
      <p className="techStack">
        <span>Tech Used:</span> {techStack}
      </p>
      <p className="description">{description}</p>
    </article>
  );
};

export default SmallResProjectCard;
