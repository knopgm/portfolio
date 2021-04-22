import React from "react";
import { IconGithubSvg, IconAtSignSvg, IconLinkedinSvg } from "icons";

import { DisplayText } from "../../components/DisplayText";
import { HighlightedText } from "../../components/HighlightedText";
import { Icon } from "../../components/Icon";

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
            <Icon source={IconLinkedinSvg} />
          </a>
          <a
            href="mailto:knop.gm@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="btn contact-details"
          >
            <Icon source={IconAtSignSvg} />
          </a>
          <a
            id="profile-link"
            href="https://github.com/knopgm"
            target="_blank"
            rel="noreferrer"
            className="btn contact-details"
          >
            <Icon source={IconGithubSvg} />
          </a>
        </div>
      </div>
    </section>
  );
}
