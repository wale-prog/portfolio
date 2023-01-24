import React, { useState } from 'react';
import Intro from './Intro';
import AboutSummary from './AboutSummary';
import Expertise from './Expertise';
import Qualifications from './Qualifications';
import Skills from './Skills';
import Projects from './Projects';
import ProjectsModal from './ProjectsModal';
import Recommendations from './Recommendations';
import Contact from './Contact';

const Homepage = () => {
  const [projectId, setProjectId] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const onProjectClick = (id) => {
    setProjectId(id);
  };

  const style = () => {
    let output = {};
    if (openModal) {
      output = {
        filter: 'blur(5px)',
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
      };
    }
    return output;
  };

  return (
    <>
      <div style={style()}>
        <Intro />
        <AboutSummary />
        <Expertise />
        <Qualifications />
        <Skills />
        <Projects onProjectClick={onProjectClick} openModal={setOpenModal} />
        <Recommendations />
        <Contact />
      </div>
      {openModal && <ProjectsModal projectId={projectId} closeModal={setOpenModal} />}
    </>
  );
};

export default Homepage;
