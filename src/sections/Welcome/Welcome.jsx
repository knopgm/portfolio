import React from "react";

import { DisplayText } from "../../components/DisplayText";
import { Text } from "../../components/Text";
import { HighlightedText } from "../../components/HighlightedText";

import { Avatar } from "./components/Avatar/Avatar";

import "./style.scss";

export function Welcome(props) {
  return (
    <div id="welcome-section" className="container welcome-section">
      <div className="welcome-section-inner-wrapper">
        <div className="welcome-text">
          <div className="welcome-text-head">
            <div>
              <DisplayText size="extraLarge">
                Hey! I am <HighlightedText>{props.name}</HighlightedText>
              </DisplayText>
            </div>

            <div>
              <DisplayText>{props.aspiringFrase}</DisplayText>
            </div>

            <div>
              <Text> {props.aboutMe}</Text>
            </div>
          </div>
        </div>
        <Avatar />
      </div>
    </div>
  );
}
