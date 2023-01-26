/* eslint-disable react/no-array-index-key */

import React, { useState } from 'react';
import Jd from './Jd';
import './Qualifications.css';
import { eduData, experienceData } from '../../helper';

const Qualifications = () => {
  const [experienceId, setExperienceId] = useState(0);

  const OpenJd = (e) => {
    if (experienceId > 0) {
      setExperienceId(0);
    } else if (experienceId === 0) {
      setExperienceId(+e.target.name);
    }
  };

  return (
    <div className="qualification-main">
      <h1>Awesome Journey</h1>
      <div className="edu-quali">
        <div className="qualifications">
          <h4 className="educa">Education</h4>
          <div className="underline hidden-desktop" />
          {eduData.map((edu) => (
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
          {experienceData.map((experience) => (
            <div key={experience.id}>
              <div className="qualification">
                <img src={experience.edu} alt="" />
                <div>
                  <h5>{experience.company}</h5>
                  <h4>{experience.position}</h4>
                  <p>{experience.duration}</p>
                  {experience.id === experienceId && <Jd id={experienceId} />}
                  <div className="hidden-desktop">
                    {experience.description.map((desc, ind) => (
                      <div className="bullet-point" key={ind}>
                        <div className="bullet" />
                        <p className="experience-desc">{desc}</p>
                      </div>
                    ))}
                  </div>
                  <button
                    name={experience.id}
                    className="hidden-mobile jd-btn"
                    type="button"
                    onClick={OpenJd}
                  >
                    Show/Hide Job description &#8645;
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Qualifications;
