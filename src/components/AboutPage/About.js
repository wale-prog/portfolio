import React from 'react';
import { IconContext } from 'react-icons';
import { FiMail } from 'react-icons/fi';
import ContactForm from './ContactForm';
import profileImg from '../../images/mobile/about-section-pic.png';
import gitHub from '../../images/mobile/github.png';
import linkedin from '../../images/mobile/linkedin.png';
import angelist from '../../images/mobile/angelist.png';
import contactImg from '../../images/mobile/about-contact.png';
import contactImage from '../../images/desktop/contactImg.png';
import './About.css';

const About = () => (
  <div className="about-main">
    <section className="introduction">
      <h1>ABOUT ME</h1>
      <div className="intro-paragraph">
        <img src={profileImg} alt="" />
        <div>
          <p>
            Hello, my name is Wale. I am a full-stack developer currently working as a code reviewer
            at Microverse, a remote software development school. The school uses project-based
            learning to teach development. I am naturally a problem solver and do algorithms
            and Data structure challenges for fun.
          </p>
          <p>
            In my free time,
            I like to listen to and make music, Afro-infused music is my
            favorite because it combines cultures and of course groovy.
            I have always been familiar with software development because of
            my core studies in school; Electrical and Electronic Engineering.
            There, I used two programming languages: Matlab and C, to simulate real-world
            experiments.
            Later, I started my career as a Customer Care Executive in the Telecommunication
            industry.
            These gave me a variety of unique technical skill sets and people skills for effective
            communication that is vital for today&apos;s remote collaboration.
          </p>
          <p>
            Before transitioning into software development, I worked as a Network Switching Engineer
            at
            a telecommunication company, this line of work is absolutely not the same as software
            development, but I learned vital skills that are transferable that I now use as a
            software
            developer: problem-solving, multi-tasking, self-learning, and team collaboration.
            I regularly got recommendations from colleagues and managers for quick thinking and
            problem-solving skills. And now, I bring the same attitude to all of my work,
            including my growth as a software engineer.Front-End: Javascript, React, Redux, jQuery,
            HTML5, CSS3 Back-End: Ruby, Rails, MySQLTools & Methods: Git, GitHub,
            TDD, Webpack, NetlifyProfessional: Remote Pair-Programming, Teamwork, Mentoring.
          </p>
        </div>
      </div>
    </section>
    <section className="personal">
      <h2>LIFE OUTSIDE WORK</h2>
      <p>
        I draw my inspiration from living an active fun-filled life.
        Hanging out with friends, listenining to music  and creating memories with people.
        My ever-inquisitive mind pushes me to explore other fields like fashion and
        I love travelling too.
        Oh, one more thing! It’s no mystery why my friends call me ‘the life of the party’.
        I definitely know when to close the lid and have a good time!
      </p>
    </section>
    <section className="principle">
      <h3>MY GUILDING PRINCIPLES</h3>
      <div className="icons">
        <div className="icons-container">
          <p className="icon-text">BECOME A CLIENT</p>
          <div>
            <IconContext.Provider
              value={{
                style:
                {
                  color: 'white', verticalAlign: 'middle', height: '24px', fontSize: '1.5em',
                },
              }}
            >
              <a href="mailto:olapetanwale@outlook.com">
                <div style={{ display: 'inline' }}>
                  <FiMail />
                </div>
              </a>
            </IconContext.Provider>
            <a href="https://linkedin.com/in/wale-petan" target="__blank">
              <img src={linkedin} alt="linkedin icon" />
            </a>
            <a href="https://github.com/wale-prog" target="__blank">
              <img src={gitHub} alt="github icon" />
            </a>
            <a href="https://angel.co/u/wale_petan" target="__blank">
              <img src={angelist} alt="angelist icon" />
            </a>
          </div>
        </div>
        <div>
          <h6>MY PRINCIPLES</h6>
          <p className="principle-text">
            To create products that are approachable and usable, I blend my personality
            independence with assiduousness and integrity. Daily aiming to provide
            individuals and companies with the best digital solutions. I work closely
            with a diverse team, our my heart and soul into my job, and the results
            speak for themselves.
          </p>
        </div>
      </div>
    </section>
    <section className="about-contact hidden-desktop">
      <h3>I&apos;m not that hard to find. Lets develop something for you</h3>
      <img src={contactImg} alt="" />
      <ContactForm />
    </section>
    <section className="about-contact2 hidden-mobile">
      <div>
        <h3>I&apos;m not that hard to find. Lets develop something for you</h3>
        <ContactForm />
      </div>
      <img src={contactImage} alt="" />
    </section>
  </div>
);
export default About;
