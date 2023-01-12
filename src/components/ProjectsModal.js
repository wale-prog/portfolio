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
    document.body.classList.remove('scroll-lock');
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
          </div>
          <div className="pic-desc">
            <img className="project-snapshot" src={project.snapShot} alt={project.title} />
            <div>
              <p>{project.description}</p>
              <ul>
                <em>built with =&gt;</em>
                {project.technologies.map((tech, ind) => (
                  <li key={ind}>{tech}</li>
                ))}
              </ul>
              <div className="project-links">
                <a className="btn" href={project.live} target="_blank" rel="noreferrer">
                  <em>See Live</em>
                  <img src={project.liveImg} alt="" />
                </a>
                <a className="btn" href={project.source} target="_blank" rel="noreferrer">
                  <em>See Source</em>
                  <img src={project.sourceImg} alt="" />
                </a>
              </div>
            </div>
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
