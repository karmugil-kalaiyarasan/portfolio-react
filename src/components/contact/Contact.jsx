import React, { useContext, useRef, useState } from "react";
import "./contact.css";
import Phone from "../../image/phone.png";
import Email from "../../image/email.png";
import Linkedin from "../../image/linkedin.svg";
import Github from "../../image/github1.svg";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkmode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_9uv1wzr",
        "template_dgld97w",
        formRef.current,
        "user_AeFH7tZUqJqtrYO4KG6C6"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Contacts</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              (437)3265654
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              karmugil95@gmail.com
            </div>
            <a
              href="https://www.linkedin.com/in/karmugil-kalaiyarasan-900114169/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="c-info-item">
                <img src={Linkedin} alt="" className="c-icon" />
                LinkedIn
              </div>
            </a>
            <a
              href="https://github.com/karmugil-kalaiyarasan/ecommerce-reactjs.git"
              target="_blank"
              rel="noreferrer"
            >
              <div className="c-info-item">
                <img src={Github} alt="" className="c-icon" />
                GitHub
              </div>
            </a>
            <div className="c-info-item"></div>
          </div>
        </div>
        <div className="c-right">
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="email"
              placeholder="Email"
              name="user_email"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              rows="5"
              placeholder="Message"
              name="message"
            />
            <button>Send Message</button>
            {done && "Thank You!"}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
