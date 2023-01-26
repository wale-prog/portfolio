/* eslint-disable react/no-array-index-key */
import React from 'react';
import { skills } from '../../helper';
import skillLogo from '../images/mobile/skill_logo.png';

const SkillDesktop = () => {
  const technicalSkills = skills();
  return (
    <div className="skill-desktop-container">
      <div className="">
        <img className="skill-logo" src={skillLogo} alt="" />
        <div className="skills">
          <h3>{technicalSkills[0].title}</h3>
          {technicalSkills[0].skills.skills.map((skill, ind) => (
            <div key={ind}>
              <img src={technicalSkills[0].skills.image} alt="" />
              <p>{skill}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="">
        <img className="skill-logo" src={skillLogo} alt="" />
        <div className="skills">
          <h3>{technicalSkills[1].title}</h3>
          {technicalSkills[1].skills.skills.map((skill, ind) => (
            <div key={ind}>
              <img src={technicalSkills[1].skills.image} alt="" />
              <p>{skill}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="">
        <img className="skill-logo" src={skillLogo} alt="" />
        <div className="skills">
          <h3>{technicalSkills[2].title}</h3>
          {technicalSkills[2].skills.skills.map((skill, ind) => (
            <div key={ind}>
              <img src={technicalSkills[2].skills.image} alt="" />
              <p>{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SkillDesktop;
