import React, { useState } from 'react';
import Intro from './Intro';
import AboutSummary from './AboutSummary';
import Expertise from './Expertise';
import Qualifications from './Qualifications';
import Skills from './Skills';
import Projects from './Projects';
import ProjectsModal from './ProjectsModal';

const Homepage = () => {
  const [projectId, setProjectId] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const onProjectClick = (id) => {
    setProjectId(id);
  };
  return (
    <>
      <Intro />
      <AboutSummary />
      <Expertise />
      <Qualifications />
      <Skills />
      <Projects onProjectClick={onProjectClick} openModal={setOpenModal} />
      {openModal && <ProjectsModal projectId={projectId} closeModal={setOpenModal} />}
    </>
  );
};

export default Homepage;
