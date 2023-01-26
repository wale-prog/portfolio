/* eslint-disable react/no-array-index-key */
import React from 'react';
import { PropTypes } from 'prop-types';
import { experienceData } from '../../helper';
import './Qualifications.css';

const Jd = (props) => {
  const { id } = props;
  const experience = experienceData.find((exp) => (
    exp.id === id
  ));

  return (
    <>
      {experience
      && experience.description.map((desc, ind) => (
        <div className="bullet-point hidden-mobile" key={ind}>
          <div className="bullet" />
          <h6 className="experience-desc">{desc}</h6>
        </div>
      ))}
    </>
  );
};

Jd.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Jd;
