import React from "react";
import { IconGithubSvg, IconExternalSvg } from "icons";

import { DisplayText } from "../../../../../../components/DisplayText";
import { Text } from "../../../../../../components/Text";
import { Icon } from "../../../../../../components/Icon";

import "./style.scss";

export function Details({ title, description, links }) {
  return (
    <div className="project-details">
      <div>
        <div className="project-details__title">
          <DisplayText>{title}</DisplayText>
        </div>
        <div className="project-details__description">
          <Text>{description}</Text>
        </div>
      </div>

      <div className="project-details__links">
        <a href={links.github} target="_blank" rel="noreferrer">
          <Icon source={IconGithubSvg} />
        </a>
        {links.website && (
          <a href={links.website} target="_blank" rel="noreferrer">
            <Icon source={IconExternalSvg} />
          </a>
        )}
      </div>
    </div>
  );
}
