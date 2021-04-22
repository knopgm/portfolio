import React from "react";

import { AboutMe } from "./components/AboutMe/AboutMe";
import { DisplayText } from "../../components/DisplayText";
import { Text } from "../../components/Text";
import { HighlightedText } from "../../components/HighlightedText";
import { IconChevronBottomSvg } from "../../icons/chevron-bottom.svg";

import { Avatar } from "./components/Avatar/Avatar";

import "./style.scss";

export function Welcome(props) {
  return (
    <div id="welcome-section" className="welcome-section">
      <div className="container">
        <div className="welcome-section-inner-wrapper">
          <div className="welcome-text">
            <div>
              <DisplayText size="extraLarge">
                Hey! I am <HighlightedText>{props.name}</HighlightedText>
              </DisplayText>
            </div>

            <div>
              <DisplayText>{props.aspiringFrase}</DisplayText>
            </div>

            <div>
              <Text>
                <AboutMe technologies={props.technologies} />
              </Text>
            </div>
          </div>
          <Avatar />
          <div>aqui:{IconChevronBottomSvg}</div>
        </div>
      </div>
    </div>
  );
}
