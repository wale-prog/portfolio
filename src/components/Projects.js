import React from 'react';
import './Projects.css';
import { projects } from '../helper';

const Projects = () => {
  const displayModal = (e) => {
    console.log(e.target.name);
  };

  return (
    <div className="project-main">
      <h2>Recent Works</h2>
      <div className="project-container">
        {projects.map((project) => (
          <div style={{ cursor: 'pointer' }} name={project.id} className="project" key={project.id} role="presentation" onClick={displayModal}>
            <img name={project.id} src={project.image} alt="" />
            <p name={project.id}>{project.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Projects;
