import { useEffect, useState } from "react";
import "./Hero.css";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: ["Loves Brazillian Jiu Jitsu", "But Really Loves to Code"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <motion.section
      className="heroSection"
      initial={{ opacity: 0 }}
      // manually set delay to appear after logo that shows on initial page load
      transition={{ delay: 4, duration: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <h1 className="hiMyNameIs">Hi, my name is</h1>
      <h1 className="kurtisIvey">Kurtis Ivey.</h1>
      <h1 className="typeWriterText">
        <span>{text}</span>
        <Cursor cursorColor="#ffffff" />
      </h1>
      <div className="bg">
        <motion.p>
          I'm a developer specializing in building highly interactive, robust,
          scalable, and maintainable web applications on both the front and back
          end using JavaScript frameworks.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default Hero;
