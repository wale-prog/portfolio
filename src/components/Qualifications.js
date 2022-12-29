/* eslint-disable react/no-array-index-key */

import React from 'react';
import './Qualifications.css';
import { eduData, experienceData } from '../helper';

const Qualifications = () => (
  <div className="qualification-main">
    <h1>Awesome Journey</h1>
    <h4 className="educa">Education</h4>
    <div className="underline" />
    {/* <div className="underline" /> */}
    <div>
      {eduData().map((edu) => (
        <div className="qualification" key={edu.id}>
          <img src={edu.edu} alt="" />
          <div>
            <h5>{edu.school}</h5>
            <h4>{edu.course}</h4>
            <p>{edu.duration}</p>
          </div>
        </div>
      ))}
    </div>
    <div className="experience">
      <h3 className="educa">Experience</h3>
      <div className="underline" />
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
            <div className="bullet-point" key={ind}>
              <div className="bullet" />
              <p>{desc}</p>
            </div>
          ))}
          <hr className="line" />
        </div>

      ))}
    </div>
  </div>
);
export default Qualifications;
