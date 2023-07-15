import "./Hero.css";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      "<Really Loves to Code/> ",
      "<But Also Loves Brazilian Jiu Jitsu/>",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <motion.section
      className="hero-section"
      initial={{ opacity: 0 }}
      // manually set delay to appear after logo that shows on initial page load
      transition={{ delay: 4, duration: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {" "}
      <div className="hero-container">
        <h1 className="main-heading">Hi, my name is</h1>
        <h2 className="sub-heading">Kurtis Ivey.</h2>
        <h3 className="type-writer-text">
          <span>{text}</span>
          <Cursor cursorColor="#ffffff" />
        </h3>
        <div className="bg">
          <p>
            I'm a Software Developer specializing in building highly
            interactive, robust, scalable, and maintainable web applications on
            both the front and back end using JavaScript frameworks. I'm
            currently looking for work and freelancing opportunities.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
