import React from "react";
import classNames from "classnames";

import { ProjectDetails } from "../ProjectDetails/ProjectDetails";

import "./style.scss";

/**
 * Props
 *  - title
 *  - description
 *  - imgUrl
 *  - links = {github, website}
 *  - alignment = "left" , "right"
 */
export function ProjectTile(props) {
  return (
    <section
      className={classNames("project-tile", {
        "project-tile-alignment-left": props.alignment === "left",
        "project-tile-alignment-right": props.alignment === "right",
      })}
    >
      <div className="project-tile-image">
        {/* <div className="transparency-box"></div> */}
        <img src={props.imgUrl} alt={props.title} />
      </div>

      <div className="project-tile-details-wrapper">
        <ProjectDetails
          textAlignment={props.alignment}
          description={props.description}
          title={props.title}
          links={{ github: props.links.github, website: props.links.website }}
        />
      </div>
    </section>
  );
}
