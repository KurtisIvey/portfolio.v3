import "./Mailer.css";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Mailer = () => {
  const to_name = "Kurtis";
  const [params, setParams] = useState({
    to_name: to_name,
    user_email: "",
    user_name: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setParams((prevParams) => ({
      ...prevParams,
      [name]: value,
    }));
  };

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .send("service_dh4g8gf", "template_loa37xn", params, "IZvdiiarOHlVtgcBd")
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  }
  return (
    <div className="mailerContainer">
      <p className="">
        Got a technical issue you need solved? Looking for a new employee to add
        to the team? Or if you just want to say hello. Feel free to reach out
        and I'll try my best to get back to you as soon as possible.
      </p>
      <form action="#" className="space-y-8" onSubmit={(e) => sendEmail(e)}>
        <div className="inputRow">
          <label htmlFor="email" className="">
            Your email
          </label>
          <input
            type="email"
            id="email"
            name="user_email"
            onChange={handleChange}
            className=""
            placeholder="yourEmail@gmail.com"
            required
          />
        </div>
        <div className="inputRow">
          <label htmlFor="name" className="">
            Your name
          </label>
          <input
            type="text"
            id="name"
            name="user_name"
            onChange={handleChange}
            className=""
            placeholder="John Doe"
            required
          />
        </div>
        <div className="inputRow">
          <label htmlFor="message" className="">
            Your message
          </label>
          <textarea
            id="message"
            name="message"
            onChange={handleChange}
            rows={6}
            className=""
            placeholder="Let me know how I can help you"
          />
        </div>
        <button type="submit" className="">
          Send message
        </button>
      </form>
    </div>
  );
};

export default Mailer;
