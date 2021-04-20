import React from "react";
import classNames from "classnames";

import "./style.scss";
// props
// -description
// -title
// -links = {github, website}
// -textAlignment= "right", "left"

export function ProjectDetails(props) {
  return (
    <div
      className={classNames("project-details", {
        "project-details-text-alignment-left": props.textAlignment === "left",
        "project-details-text-alignment-right": props.textAlignment === "right",
      })}
    >
      <header className="project-details-header">{props.title}</header>
      <div className="project-details-description">{props.description}</div>
      <div className="project-details-links">
        <a
          href={props.links.github}
          target="_blank"
          rel="noreferrer"
          //className="btn contact-details"
        >
          <i className="icon fab fa-github"></i>
        </a>
        <a
          href={props.links.github}
          target="_blank"
          rel="noreferrer"
          //className="btn contact-details"
        >
          <i className="icon fas fa-external-link-alt"></i>
        </a>
      </div>
    </div>
  );
}
