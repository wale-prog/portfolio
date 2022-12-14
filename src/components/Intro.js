import React from 'react';
import profilePhoto from '../images/mobile/home_photo.png';
import './Intro.css';

const Intro = () => (
  <div className="intro">
    <h4>Hello, my name is </h4>
    <h2>Olapetan Olawale</h2>
    <p>
      I am a
      <span> Full stack developer</span>
      with experience knowledge in JavaScript, React, Redux, Ruby, Ruby on Rails,
      PostgreSQL. In love with pair-programming, remote work and improving open-source projects.
      {' '}
    </p>
    <a href="/" target="__blank">Resume</a>
    <img src={profilePhoto} alt="profile" />
  </div>
);

export default Intro;
