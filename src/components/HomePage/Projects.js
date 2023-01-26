import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import './Projects.css';
import { projects } from '../../helper';

const Projects = (props) => {
  const { onProjectClick, openModal } = props;

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  window.onresize = () => {
    setWindowSize(window.innerWidth);
  };

  const imageSource = (project) => (
    windowSize <= 768 ? project.image : project.imageDesktop
  );

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
            <p>{project.title}</p>
          </div>
        ))}
      </div>
      <div className="cta">
        <h2>Have a project on your mind?</h2>
        <p>
          I help client to create a possible solution to their problems.
          I have been doing this over the years and many have reached out
          to me commending my effort as well as recommending me for many other jobs.
        </p>
        <a href="#contact">Contact Me</a>
      </div>
    </div>
  );
};

Projects.propTypes = {
  onProjectClick: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default Projects;
