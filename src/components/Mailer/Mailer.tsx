import "./Mailer.css";
import React, { useState, useCallback, useMemo } from "react";
import emailjs from "@emailjs/browser";

const serviceId = "service_dh4g8gf";
const templateId = "template_loa37xn";
const userId = "IZvdiiarOHlVtgcBd";

const Mailer = () => {
  const to_name = useMemo(() => "Kurtis", []);

  const [params, setParams] = useState({
    to_name,
    user_email: "",
    user_name: "",
    message: "",
  });

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setParams((prevParams) => ({
        ...prevParams,
        [name]: value,
      }));
    },
    []
  );

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(serviceId, templateId, e.target, userId);
      console.log("SUCCESS!");
      alert("Email sent!");
      resetForm();
    } catch (error) {
      console.log("FAILED...", error);
      alert(
        "Error in sending email. Please reach out directly through your email client."
      );
    }
  };

  function resetForm() {
    setParams({
      to_name: to_name,
      user_email: "",
      user_name: "",
      message: "",
    });
  }
  return (
    <div className="mailerContainer">
      <div className="">
        Got a technical issue you need solved? Looking for a new employee to add
        to the team? Or if you just want to say hello. Feel free to reach out &
        I'll try my best to get back to you as soon as possible.
      </div>
      <form action="#" className="" onSubmit={(e) => sendEmail(e)}>
        <div className="inputRow">
          <label htmlFor="email">Your email</label>
          <input
            type="email"
            id="email"
            name="user_email"
            onChange={handleChange}
            placeholder="yourEmail@gmail.com"
            required
            value={params.user_email}
            aria-label="Your email address"
          />
        </div>
        <div className="inputRow">
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            name="user_name"
            onChange={handleChange}
            placeholder="John Doe"
            required
            value={params.user_name}
            aria-label="Your name"
          />
        </div>
        <div className="inputRow">
          <label htmlFor="message">Your message</label>
          <textarea
            id="message"
            name="message"
            onChange={handleChange}
            rows={6}
            placeholder="Let me know how I can help you"
            value={params.message}
            required
            aria-label="Your message"
          />
        </div>
        <div className="buttonRow">
          <button type="submit" title="Send message">
            Send message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Mailer;
