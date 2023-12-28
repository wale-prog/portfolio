import React from 'react';
import profilePhoto from '../../images/mobile/home_photo.png';
import './Intro.css';

const Intro = () => (
  <div className="intro" id="home">
    <div>
      <h4>Hello, my name is </h4>
      <h2>Olapetan Olawale</h2>
      <p>
        I am a
        <span> Test Automation Engineer </span>
        with experience in setting up test automation frameworks using Selenium, Cypress and Appium
        with Java, JavaScript, and Ruby. I am also proficient in front and backend frameworks like
        React, Redux, Ruby on Rails, and
        PostgreSQL. In love with pair-programming, remote work and
        improving software release quality.
        {' '}
      </p>
      <a href="https://docs.google.com/document/d/1qIsd_htsgcpXc-x6rcxhTZ7o7wVVErTvODbo1K7jF3g/edit?usp=sharing" target="__blank">Resume</a>
    </div>
    <img src={profilePhoto} alt="profile" />
  </div>
);

export default Intro;
