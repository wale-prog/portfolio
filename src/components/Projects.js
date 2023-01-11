import React from 'react';
import { PropTypes } from 'prop-types';
import './Projects.css';
import { projects } from '../helper';

const Projects = (props) => {
  const { onProjectClick, openModal } = props;
  const displayModal = (e) => {
    onProjectClick(+e.target.name);
    openModal(true);
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

Projects.propTypes = {
  onProjectClick: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default Projects;
