import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import './Projects.css';
import { projects } from '../helper';

const Projects = (props) => {
  const { onProjectClick, openModal } = props;

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  window.onresize = () => {
    setWindowSize(window.innerWidth);
  };

  const imageSource = (project) => {
    const result = windowSize <= 768 ? project.image : project.imageDesktop;
    return result;
  };

  const displayModal = (e) => {
    onProjectClick(+e.target.name);
    openModal(true);
    document.body.classList.add('scroll-lock');
  };

  return (
    <div className="project-main" id="projects">
      <h2>Recent Works</h2>
      <div className="project-container">
        {projects.map((project) => (
          <div
            style={{ cursor: 'pointer' }}
            name={project.id}
            className="project"
            key={project.id}
            role="presentation"
            onClick={displayModal}
          >
            <img name={project.id} src={imageSource(project)} alt="" />
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
