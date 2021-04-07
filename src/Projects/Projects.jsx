import React from 'react';

import './style.scss';

export function Projects(props) {
  console.log(props)
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="projects-header">Here are some of my Projects</h2>
        <div className="project-grid">
          {props.projects.map(project => (
             <a href={project.url} target="_blank" className="project project-tile">

              <div className="project-image">
                <img src={project.imgUrl} alt={project.title} />
              </div>
    
              <p className="project-title">
                <span className="code">&lt;</span>
                {project.title}
                <span className="code">/&gt;</span>
              </p>
   
             </a>
          ))}
        </div>

        <div className="project-section-footer">
          <a href="" className="btn btn-show-all" target="_blank">Show All
            <i className="fas fa-chevron-right"></i>
          </a>
        </div>

      </div> 
    </section>
  );
}