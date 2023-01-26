import React, { useState } from 'react';
import axios from 'axios';
import phone from '../images/mobile/phone.png';
import mail from '../images/mobile/mail.png';
import location from '../images/mobile/location.png';
import github from '../images/mobile/github.png';
import linkedin from '../images/mobile/linkedin.png';
import medium from '../images/mobile/medium.png';
import angelist from '../images/mobile/angelist.png';
import './Contact.css';

const Contact = () => {
  const [input, setInput] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errorStatus, setErrorStatus] = useState(false);
  const [successStatus, setSuccessStatus] = useState(false);

  const handleInput = (e) => {
    setInput({
      ...input, [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = input;
    axios.post('https://formspree.io/f/xpzbjqge', {
      name,
      email,
      message,
    })
      .then((response) => {
        if (response.status === 200) {
          setInput({
            ...input, name: '', email: '', message: '',
          });
          setSuccessStatus(true);
        }
      })
      .catch((error) => {
        if (error) {
          setErrorStatus(true);
        }
      });
  };

  const closeError = () => {
    setErrorStatus(false);
  };
  const closeMessage = () => {
    setSuccessStatus(false);
  };

  return (
    <div className="contact-main" id="contact">

      <h4>Get In Touch</h4>

      <section className="contact-section">
        <form className="form" onSubmit={handleSubmit}>

          <div className={errorStatus ? 'error-message active' : 'error-message'}>
            <p className="cancel" role="presentation" onClick={closeError}>x</p>
            <p>
              Oops! Form isn&apos;t working right now, not to worry&#128516;!
              You can send me a direct email&#128231;
              {' '}
              <a href="mailto:olapetanwale@outlook.com">here</a>
            </p>
          </div>
          <div>
            <div className={successStatus ? 'success-message active' : 'success-message'}>
              <p className="cancel" role="presentation" onClick={closeMessage}>x</p>
              <p>
                Great! Thank you for getting in touch, the message has been recieved and
                I will get back to you as soon as possible. In the meantime,
                please feel free to go through my other projects on
                {' '}
                <a href="https://github.com/wale-prog" target="__blank">GitHub.</a>
              </p>
            </div>
          </div>

          <div className="contact-input">
            <input
              value={input.name}
              name="name"
              placeholder="Name"
              required
              maxLength="45"
              onChange={handleInput}
            />
            <input
              value={input.email}
              name="email"
              placeholder="Email"
              required
              pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$"
              onChange={handleInput}
            />
          </div>
          <textarea
            value={input.message}
            name="message"
            required
            maxLength="500"
            placeholder="Message"
            onChange={handleInput}
          />
          <button type="submit">Send Message</button>
        </form>
        <section className="footer">
          <div className="footer-content">
            <img src={phone} alt="phone icon" />
            <div>
              <p>Call Me</p>
              <a href="tel:+2348032415315">+234-803-2415-315</a>
            </div>
          </div>
          <div className="footer-content">
            <img src={mail} alt="mail icon" />
            <div>
              <p>E-mail</p>
              <a href="mailto:olapetanwale@outlook.com">olapetanwale@outlook.com</a>
            </div>
          </div>
          <div className="footer-content">
            <img src={location} alt="location icon" />
            <div>
              <p>Location</p>
              <h6>Lagos, Nigeria</h6>
            </div>
          </div>
        </section>
      </section>
      <section className="social-handles">
        <hr className="footer-line" />
        <ul>
          <li><a href="https://github.com/wale-prog" target="_blank" rel="noreferrer"><img src={github} alt="github icon" /></a></li>
          <li><a href="https://linkedin.com/in/walepetan" target="_blank" rel="noreferrer"><img src={linkedin} alt="linkedin icon" /></a></li>
          <li><a href="https://angel.co/u/wale_petan" target="_blank" rel="noreferrer"><img src={angelist} alt="angelist icon" /></a></li>
          <li><a href="https://medium.com/@bumpyplanks" target="_blank" rel="noreferrer"><img src={medium} alt="medium icon" /></a></li>
        </ul>
      </section>
    </div>
  );
};
export default Contact;
