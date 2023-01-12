import React from 'react';
import './AboutSummary.css';
import { NavLink } from 'react-router-dom';
import picFrame from '../images/desktop/pic_frame.png';

const AboutSummary = () => (
  <div className="about-summary-main" id="about">
    <div className="about-content">
      <h2>About me</h2>
      <p>
        Hello, my name is Wale. I am a full-stack developer currently
        working as a code reviewer at Microverse,
        a remote software development school.
        The school uses project-based learning to teach development. I am naturally a
        problem solver and do algorithms and Data structure challenges for fun.
        In my free time, I like to listen to and make music,
        Afro-infused music is my favorite because it combines cultures and of course groovy.
        I have always been familiar with software development
        because of my core studies in school; Electrical and Electronic Engineering.
        There, I used two programming languages: Matlab and C, to simulate real-world experiments...
        {' '}
        <span className="see-more">
          <NavLink to="/about">See more</NavLink>
        </span>
      </p>
      <div className="contact-info">
        <p>
          Name:
          {' '}
          <span>Olapetan Olawale</span>
        </p>
        <p>
          Phone:
          <span>+234 - 803 - 241 - 5315</span>
        </p>
        <p>
          Email:
          <span><a href="mailto:olapetanwale@outlook.com">olapetanwale@outlook.com</a></span>
        </p>
      </div>
    </div>
    <div className="pic-desktop hidden">
      <div>
        <img className="picFrame" src={picFrame} alt="" />
      </div>
    </div>
  </div>
);

export default AboutSummary;
