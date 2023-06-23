import "./LargeNavbar.css";

type Props = {
  handleScrollToSection: (sectionId: string) => void;
};

const LargeNavbar = ({ handleScrollToSection }: Props) => {
  return (
    <nav className="nav-larger-res-nav-links">
      <ul className="larger-nav-links-container" role="menu">
        <li role="none">
          <button
            onClick={() => handleScrollToSection("about")}
            aria-label="About Section"
            role="menuitem"
          >
            <span>01.</span> About
          </button>
        </li>
        <li role="none">
          <button
            onClick={() => handleScrollToSection("skills")}
            aria-label="Skills Section"
            role="menuitem"
          >
            <span>02.</span> Skills
          </button>
        </li>
        <li role="none">
          <button
            onClick={() => handleScrollToSection("projects")}
            aria-label="Projects Section"
            role="menuitem"
          >
            <span>03.</span> Projects
          </button>
        </li>
        <li role="none">
          <button
            onClick={() => handleScrollToSection("contact")}
            aria-label="Contact Section"
            role="menuitem"
          >
            <span>04.</span> Contact
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default LargeNavbar;
