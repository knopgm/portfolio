import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { IconGithubSvg, IconAtSignSvg, IconLinkedinSvg } from "icons";

import { PageSection } from "../../components/PageSection";
import { DisplayText } from "../../components/DisplayText";
import { HighlightedText } from "../../components/HighlightedText";
import { Icon } from "../../components/Icon";

import "./style.scss";

export function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <PageSection anchor="contact" nextSectionAnchor="welcome">
      <motion.div
        ref={ref}
        className="contact-section"
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.8 }}
      >
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
      </motion.div>
    </PageSection>
  );
}
