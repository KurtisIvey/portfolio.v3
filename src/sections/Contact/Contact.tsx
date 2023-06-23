import React, { useEffect } from "react";
import "./Contact.css";
import Mailer from "../../components/Mailer/Mailer";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contact: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the animation only once when the div enters the viewport
  });

  useEffect(() => {
    if (inView) {
      // motion features definied here to be used on the section element
      controls.start({ opacity: 1, transition: { duration: 1.8 } });
    }
  }, [controls, inView]);

  return (
    <motion.section
      className="contact-section sub-section"
      id="contact"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={controls}
    >
      <h1 className="section-h1">
        <span>04. </span>Contact
      </h1>
      <Mailer />
    </motion.section>
  );
};

export default Contact;
