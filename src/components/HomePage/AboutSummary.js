import React from 'react';
import './AboutSummary.css';
import { NavLink } from 'react-router-dom';
import picFrame from '../../images/desktop/pic_frame.png';
import personIcon from '../../images/desktop/person-icon.png';
import mailIcon from '../../images/desktop/mail-icon.png';
import phoneIcon from '../../images/desktop/phone-icon.png';

const AboutSummary = () => (
  <div className="about-summary-main" id="about">
    <div className="about-content">
      <h2>About me</h2>
      <p className="summary-paragraph">
        🚀 Hey there! I&apos;m Olawale, a passionate Software Quality Assurance professional
        with four years of hands-on experience in ensuring top-notch software quality.🌐
        <br />
        👨‍💻 In the ever-evolving world of technology, I&apos;ve spent the past four years
        diving deep into the realms of Software Quality Assurance, with a special focus
        on Test Automation. For the last 1.5 years, I&apos;ve been on the automation highway,
        leveraging tools like Selenium, Appium, and Cypress to bring efficiency and excellence
        to the testing process.
        <br />
        🛠️ My tool belt includes Selenium and Appium for web and mobile automation,
        respectively, making sure that every click and swipe is met with precision.
        When it comes to web applications, I dance with Java and JavaScript to craft
        robust automated test scripts....
        {' '}
        <span className="see-more">
          <NavLink to="/about">See more</NavLink>
        </span>
      </p>
      <div className="contact-info">
        <div>
          <img src={personIcon} alt="" />
          <p>
            Name:
            {' '}
            <span>Olapetan Olawale</span>
          </p>
        </div>
        <div>
          <img src={phoneIcon} alt="" />
          <p>
            Phone:
            <span><a href="tel:+2348032415315">+234-803-241-5315</a></span>
          </p>
        </div>
        <div>
          <img src={mailIcon} alt="" />
          <p>
            Email:
            <span><a href="mailto:olapetanwale@outlook.com">olapetanwale@outlook.com</a></span>
          </p>
        </div>
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
