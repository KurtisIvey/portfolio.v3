import React, { useRef, useEffect, useState } from "react";
import "./About.css";
import headshot from "../../assets/headshot.jpeg";

const About: React.FC = () => {
  const aboutImgContainerRef = useRef<HTMLDivElement>(null);
  const [hoveringOnHeadshot, setHoveringOnHeadshot] = useState<boolean>(false);

  useEffect(() => {
    const handleMouseEnter = () => {
      setHoveringOnHeadshot(true);
      // Perform any desired actions when the mouse enters the element
    };

    const handleMouseLeave = () => {
      setHoveringOnHeadshot(false);
      // Perform any desired actions when the mouse leaves the element
    };

    const aboutImgContainer = aboutImgContainerRef.current;
    if (aboutImgContainer) {
      aboutImgContainer.addEventListener("mouseenter", handleMouseEnter);
      aboutImgContainer.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (aboutImgContainer) {
        aboutImgContainer.removeEventListener("mouseenter", handleMouseEnter);
        aboutImgContainer.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <section className="aboutSection" id="about">
      <h1>
        <span>01.</span> About Me
      </h1>
      <div ref={aboutImgContainerRef} className="aboutImgContainer">
        <div className="imgWrapper">
          <img src={headshot} alt="Profile" />
          <div className="color-overlay"></div>
        </div>
        <div className={`behindBox ${hoveringOnHeadshot && "hovered"}`}></div>
      </div>
      <div className="aboutTextContainer">
        <p>
          Hey there! My name is Kurtis and I'm a former over the road truck
          driver/instructor turned <span>Developer 🚚</span> My interest in
          coding began while I was driving all throughout the country delivering
          freight & needed a game plan once I decided to exit that industry.
        </p>
        <p>
          Here I am today, still pursuing my dream of becoming a developer, with
          a main focus on <span>specializing in the use of React 💻</span> I
          leverage this framework to build accessible digital experiences for a
          variety of users.
        </p>
        <p>
          When I'm not coding, I'm spending my time as a{" "}
          <span style={{ color: "rgba(210, 124, 124)" }}>loving husband</span>{" "}
          and
          <span> Brazilian Jiu Jitsu student/instructor 🥋</span>
        </p>
        <p>
          <span>Fun Fact:</span> I've traveled a distance that is equivalent to
          circling the Earth 28 times while trucking, so I'm pretty much a
          professional at sitting on my butt.
        </p>
      </div>
    </section>
  );
};

export default About;
