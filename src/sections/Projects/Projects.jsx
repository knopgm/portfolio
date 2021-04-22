import React from "react";
import { DisplayText } from "../../components/DisplayText";
import { ProjectCard } from "./components/ProjectCard/ProjectCard";

import "./style.scss";

// props
// - projects: [] project item
//   project item = { title, links = {github, website}, imgUrl, description }

export function Projects(props) {
  //console.log(props);
  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="projects__header">
          <DisplayText size="extraLarge">
            Here are some of my projects
          </DisplayText>
        </div>
        <div className="projects__grid">
          {props.projects.map((projectItem) => (
            <ProjectCard
              key={projectItem.title}
              title={projectItem.title}
              description={projectItem.description}
              links={{
                github: projectItem.links.github,
                website: projectItem.links.website,
              }}
              imgUrl={projectItem.imgUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
