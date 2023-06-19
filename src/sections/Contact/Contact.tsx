import React from "react";
import "./Contact.css";
import Mailer from "../../components/Mailer/Mailer";
type Props = {};

const Contact = (props: Props) => {
  return (
    <section className="contactSection subSection">
      <h1 className="sectionH1">
        <span>04. </span>Contact
      </h1>
      <Mailer />
    </section>
  );
};

export default Contact;
