/* eslint-disable react/no-array-index-key */
import React from 'react';
import { skills } from '../helper';
import skillLogo from '../images/mobile/skill_logo.png';

const SkillsCard = () => {
  const technicalSkills = skills;
  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide hidden-desktop" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" />
          <li data-target="#carouselExampleIndicators" data-slide-to="1" />
          <li data-target="#carouselExampleIndicators" data-slide-to="2" />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
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
          <div className="carousel-item">
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
          <div className="carousel-item">
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
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
      <div className="skill-desktop-container hidden-mobile">
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
    </>
  );
};

export default SkillsCard;
