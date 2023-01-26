import React from 'react';
import profilePhoto from '../../images/mobile/home_photo.png';
import './Intro.css';

const Intro = () => (
  <div className="intro">
    <div>
      <h4>Hello, my name is </h4>
      <h2>Olapetan Olawale</h2>
      <p>
        I am a
        <span> Full stack developer </span>
        with experience knowledge in JavaScript, React, Redux, Ruby, Ruby on Rails,
        PostgreSQL. In love with pair-programming, remote work and improving open-source projects.
        {' '}
      </p>
      <a href="https://docs.google.com/document/d/1zZE8Rw-txET6f1NsGIueKPI7k1vz_3-Y/edit?usp=sharing&ouid=107807986154209243588&rtpof=true&sd=true" target="__blank">Resume</a>
    </div>
    <img src={profilePhoto} alt="profile" />
  </div>
);

export default Intro;
