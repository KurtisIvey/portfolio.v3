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
    <article className="mobile-project-card">
      <div className="top">
        <h2>
          <a href={website} target="_blank">
            {name}
          </a>
        </h2>
        <div className="links">
          <a
            target="_blank"
            href={repo}
            aria-label={`${name} GitHub Repository`}
            title="GitHub Repository"
            tabIndex={0}
          >
            <BsGithub size={25} />
          </a>
          <a
            target="_blank"
            href={website}
            aria-label={`${name} Website`}
            title="Website"
            tabIndex={0}
          >
            <BsGlobe size={25} />
          </a>
        </div>
      </div>
      <img src={img} alt={name} />
      <p className="tech-stack">
        <span>Tech Used:</span> {techStack}
      </p>
      <p className="description">{description}</p>
    </article>
  );
};

export default SmallResProjectCard;
