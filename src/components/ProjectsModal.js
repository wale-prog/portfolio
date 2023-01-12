/* eslint-disable react/no-array-index-key */
import React from 'react';
import { PropTypes } from 'prop-types';
import { projects } from '../helper';
import './ProjectsModal.css';

const ProjectsModal = (props) => {
  const { projectId, closeModal } = props;
  const project = projects.find((project) => project.id === projectId);
  const cancelModal = () => {
    closeModal(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <div className="project-modal-container">
        <div className="project-modal">
          <div className="modal-head">
            <h4>{project.title}</h4>
            <div className="close-btn" role="presentation" onClick={cancelModal}>
              <div />
              <div />
            </div>
            {/* <button type="button" onClick={cancelModal}>X</button> */}
          </div>
          <img className="project-snapshot" src={project.snapShot} alt={project.title} />
          <p>{project.description}</p>
          <ul>
            {project.technologies.map((tech, ind) => (
              <li key={ind}>{tech}</li>
            ))}
          </ul>
          <div className="project-links">
            <a className="btn" href={project.live} target="_blank" rel="noreferrer">Live</a>
            <a className="btn" href={project.source} target="_blank" rel="noreferrer">Source</a>
          </div>
        </div>
      </div>
    </>
  );
};

ProjectsModal.propTypes = {
  projectId: PropTypes.number.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default ProjectsModal;
