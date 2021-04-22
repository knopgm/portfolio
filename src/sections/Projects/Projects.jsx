import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { PageSection } from "../../components/PageSection";
import { DisplayText } from "../../components/DisplayText";
import { ProjectCard } from "./components/ProjectCard/ProjectCard";

import "./style.scss";

// props
// - projects: [] project item
//   project item = { title, links = {github, website}, imgUrl, description }

export function Projects({ projects }) {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <PageSection anchor="projects">
      <motion.div
        ref={ref}
        className="projects-wrapper"
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.8 }}
      >
        <div className="projects__header">
          <DisplayText size="extraLarge">
            Here are some of my projects
          </DisplayText>
        </div>

        <div className="projects__grid">
          {projects.map((projectItem) => (
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
      </motion.div>
    </PageSection>
  );
}
