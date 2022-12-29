import React from 'react';
import SkillsCard from './SkillsCard';
// import { skills } from '../helper';
import './Skills.css';

const Skills = () => (
  <>
    <div className="skills-main">
      <h1>What I offer</h1>
    </div>
    <SkillsCard />
    {/* <Carousel>
      {skills().map((skill) => (
        <div className="skill" key={skill.id}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={skill.skills.image}
              alt=""
            />
            <Carousel.Caption>
              <h3>{skill.skills.title}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </div>
      ))}
    </Carousel> */}
  </>
);

export default Skills;
