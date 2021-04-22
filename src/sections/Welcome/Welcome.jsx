import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { AboutMe } from "./components/AboutMe/AboutMe";
import { DisplayText } from "../../components/DisplayText";
import { Text } from "../../components/Text";
import { HighlightedText } from "../../components/HighlightedText";
import { PageSection } from "../../components/PageSection";
import { Avatar } from "./components/Avatar/Avatar";

import "./style.scss";

export function Welcome(props) {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <PageSection anchor="welcome">
      <motion.div
        ref={ref}
        className="welcome-section-inner-wrapper"
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.8 }}
      >
        <div className="welcome-text">
          <div>
            <DisplayText size="extraLarge">
              Hey! I am <HighlightedText>{props.name}</HighlightedText>
            </DisplayText>
          </div>

          <div className="welcome-text__subtitle">
            <DisplayText>{props.subtitleFrase}</DisplayText>
          </div>

          <div>
            <Text>
              <AboutMe technologies={props.technologies} />
            </Text>
          </div>
        </div>
        <Avatar />
      </motion.div>
    </PageSection>
  );
}
