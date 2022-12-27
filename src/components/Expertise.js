import React from 'react';
import './Expertise.css';

const Expertise = () => {
  const myExpertise = [
    { id: 1, name: 'Front End Development', score: '80%' },
    { id: 2, name: 'React', score: '90%' },
    { id: 3, name: 'Redux', score: '80%' },
    { id: 4, name: 'JavaScript', score: '80%' },
    { id: 5, name: 'Ruby', score: '60%' },
    { id: 6, name: 'Ruby on Rails', score: '70%' },
    { id: 7, name: 'PostgreSQL', score: '70%' },
    { id: 8, name: 'RSpec', score: '90%' },
  ];

  return (
    <div className="expertise">
      <p>Why Choose Me</p>
      <h5>My Expertise Area</h5>
      {myExpertise.map((expertise) => (
        <div className="chart-outer" key={expertise.id}>
          <div className="chart-title">
            <div className="chart-label">{expertise.name}</div>
            <div className="chart-score">{expertise.score}</div>
          </div>
          <div className="chart-bar-inner">
            <div className="chart-fill" style={{ width: expertise.score }} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Expertise;
