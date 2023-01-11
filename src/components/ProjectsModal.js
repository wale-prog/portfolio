/* eslint-disable react/no-array-index-key */
import React from 'react';
import { PropTypes } from 'prop-types';
import { projects } from '../helper';

const ProjectsModal = (props) => {
  const { projectId, closeModal } = props;
  const project = projects.find((project) => project.id === projectId);

  return (
    <>
      <div className="project-modal-container">
        <img src={project.image} alt={project.title} />
        <button type="button" onClick={() => closeModal(false)}>X</button>
        <p>{project.description}</p>
        <a href={project.live} target="_blank" rel="noreferrer">Live</a>
        <a href={project.source} target="_blank" rel="noreferrer">Source</a>
        {project.technologies.map((tech, ind) => (
          <li key={ind}>{tech}</li>
        ))}
      </div>
    </>
  );
};

ProjectsModal.propTypes = {
  projectId: PropTypes.number.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default ProjectsModal;
