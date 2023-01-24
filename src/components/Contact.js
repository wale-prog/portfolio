import React, { useState } from 'react';
import axios from 'axios';
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
      {
      errorStatus
      && (
        <div className="error-message">
          <p className="cancel" role="presentation" onClick={closeError}>x</p>
          <p>
            Sorry! Form isn&apos;t working right now, not to worry&#128516;!
            You can send me a direct email&#128231;
            {' '}
            <a href="mailto:olapetanwale@outlook.com">here</a>
          </p>
        </div>
      )
      }
      {
        successStatus
        && (
          <div className="success-message">
            <p className="cancel" role="presentation" onClick={closeMessage}>x</p>
            <p>
              Great! Thank you for getting in touch, the message has been recieved and
              I will get back to you as soon as possible. In the meantime,
              please feel free to go through my other projects on
              {' '}
              <a href="https://github.com/wale-prog" target="__blank">GitHub.</a>
            </p>
          </div>
        )
      }
      <form className="form" onSubmit={handleSubmit}>
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
    </div>
  );
};
export default Contact;
