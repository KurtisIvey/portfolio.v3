import { useEffect, useState } from "react";
import "./Hero.css";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
type Props = {};

const Hero = (props: Props) => {
  const [text1Ready, setText1Ready] = useState<boolean>(false);
  const [text2Ready, setText2Ready] = useState<boolean>(false);
  const [text3Ready, setText3Ready] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setText1Ready(true);
    }, 4000);
    setTimeout(() => {
      setText2Ready(true);
    }, 6000);
    setTimeout(() => {
      setText3Ready(true);
    }, 8000);
  });

  return (
    <motion.section
      className="heroSection"
      initial={{ opacity: 0 }}
      // manually set delay to appear after logo that shows on initial page load
      transition={{ delay: 4, duration: 2 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {text1Ready && (
        <h1 className="hiMyNameIs">
          <Typewriter
            words={["Hi my name is Kurtis"]}
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
      )}
      {text2Ready && (
        <h1 className="guyWhoLoves">
          <Typewriter
            words={["Guy who loves Jiu Jitsu"]}
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
      )}
      {text3Ready && (
        <h1 className="butReallyLoves">
          <Typewriter
            words={["<But-Really-Loves-To-Code/>"]}
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
      )}
      <motion.p
        className="heroSection"
        initial={{ opacity: 0 }}
        // manually set delay to appear after logo that shows on initial page load
        transition={{ delay: 10, duration: 1 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        I'm a developer specializing in building highly interactive, robust,
        scalable, and maintainable web applications on both the front and back
        end using JavaScript frameworks.
      </motion.p>
    </motion.section>
  );
};

export default Hero;
