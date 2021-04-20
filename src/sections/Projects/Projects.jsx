import React from "react";
// import { DisplayText } from "../../components/DisplayText";
// import { ProjectTile } from "./components/ProjectTile/ProjectTile";

import "./style.scss";

// props
// - projects: [] project item
//   project item = { title, links = {github, website}, imgUrl, description }

export function Projects(props) {
  console.log(props);
  return (
    <section id="projects" className="projects">
      {/* <div className="container">
        <div className="projects__header">
          <DisplayText size="extraLarge">
            Here are some of my Projects
          </DisplayText>
        </div>

        <div className="project__grid">
          {props.projects.map((projectItem, index) => (
            <ProjectTile
              alignment={index % 2 === 0 ? "left" : "right"}
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
      </div> */}
    </section>
  );
}
