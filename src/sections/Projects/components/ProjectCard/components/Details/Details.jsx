import React from "react";
import { IconGithubSvg, IconExternalSvg } from "icons";

import { DisplayText } from "../../../../../../components/DisplayText";
import { Text } from "../../../../../../components/Text";
import { Icon } from "../../../../../../components/Icon";

import "./style.scss";

export function Details(props) {
  return (
    <div className="project-details">
      <div className="project-details__title">
        <DisplayText>{props.title}</DisplayText>
      </div>
      <div className="project-details__description">
        <Text>{props.description}</Text>
      </div>
      <div className="project-details__links">
        <a href={props.links.github} target="_blank" rel="noreferrer">
          <Icon source={IconGithubSvg} />
        </a>
        <a href={props.links.github} target="_blank" rel="noreferrer">
          <Icon source={IconExternalSvg} />
        </a>
      </div>
    </div>
  );
}
