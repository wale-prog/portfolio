/* eslint-disable react/no-array-index-key */

import React from 'react';
import './Qualifications.css';
import { eduData, experienceData } from '../helper';

const Qualifications = () => (
  <div className="qualification-main">
    <h1>Awesome Journey</h1>
    <div className="edu-quali">
      <div>
        <h4 className="educa">Education</h4>
        <div className="underline hidden-desktop" />
        {eduData().map((edu) => (
          <div className="qualification" key={edu.id}>
            <img src={edu.edu} alt="" />
            <div className="qualifi">
              <h5>{edu.school}</h5>
              <h4>{edu.course}</h4>
              <p>{edu.duration}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="experience">
        <h3 className="educa">Experience</h3>
        <div className="underline hidden-desktop" />
        {experienceData().map((experience) => (
          <div key={experience.id}>
            <div className="qualification">
              <img src={experience.edu} alt="" />
              <div>
                <h5>{experience.company}</h5>
                <h4>{experience.position}</h4>
                <p>{experience.duration}</p>
              </div>
            </div>
            {experience.description.map((desc, ind) => (
              <div className="bullet-point hidden-desktop" key={ind}>
                <div className="bullet" />
                <p>{desc}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  </div>
);
export default Qualifications;
