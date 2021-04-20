import React from "react";
import { DisplayText } from "../../components/DisplayText";
import { HighlightedText } from "../../components/HighlightedText";

import "./style.scss";

export function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-section-header">
          <DisplayText size="extraLarge">
            {`Let's work `}
            <HighlightedText>together</HighlightedText>...
          </DisplayText>

          <DisplayText size="large" weight="thin">
            <p>Just send me a message</p>
          </DisplayText>
        </div>
        <div className="contact-links">
          <a
            href="https://www.linkedin.com/in/gabriela-knop-marques-b5075a53/"
            target="_blank"
            rel="noreferrer"
            className="btn contact-details"
          >
            <i className="fab fa-linkedin"></i>
            Linkedin
          </a>
          <a
            id="profile-link"
            href="https://github.com/knopgm"
            target="_blank"
            rel="noreferrer"
            className="btn contact-details"
          >
            <i className="fab fa-github"></i>
            Github
          </a>
          <a
            href="mailto:knop.gm@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="btn contact-details"
          >
            <i className="fas fa-at"></i>
            Send a mail
          </a>
        </div>
      </div>
    </section>
  );
}
