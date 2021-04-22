import React from "react";
import { ColoredBox } from "../../../../components/ColoredBox";
import { Details } from "./components/Details/Details";

import "./style.scss";

export function ProjectCard(props) {
  return (
    <ColoredBox>
      <div className="project-card">
        <div className="project-card__image-wrapper">
          <div className="project-card__image">
            <img src={props.imgUrl} alt={props.title} />
          </div>
        </div>

        <div className="project-card__details-wrapper">
          <Details
            description={props.description}
            title={props.title}
            links={{
              github: props.links.github,
              website: props.links.website,
            }}
          />
        </div>
      </div>
    </ColoredBox>
  );
}
