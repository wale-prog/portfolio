import React, { useState } from 'react';
import axios from 'axios';
import './ContactForm.css';

const ContactForm = () => {
  const [input, setInput] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errorStatus, setErrorStatus] = useState(false);
  const [successStatus, setSuccessStatus] = useState(false);
  const handleInput = (event) => {
    setInput((prev) => ({
      ...prev, [event.target.name]: event.target.value,
    }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const { name, email, message } = input;
    axios.post('https://formspree.io/f/xpzbjqge', {
      name,
      email,
      message,
    })
      .then((resp) => {
        if (resp.status === 200) {
          setInput({
            ...input, email: '', name: '', message: '',
          });
        }
        setSuccessStatus(true);
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
    <>
      <form onSubmit={onSubmit} className="contact-form" id="contact">
        <section className="popup-message-handling">
          {errorStatus
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
            )}

          {successStatus
            && (
              <div>
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
              </div>
            )}
        </section>
        <input
          placeholder="Full Name"
          type="text"
          name="name"
          value={input.name}
          required
          onChange={handleInput}
        />
        <input
          placeholder="Enter you email address"
          type="email"
          name="email"
          value={input.email}
          pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$"
          required
          onChange={handleInput}
        />
        <textarea
          name="message"
          maxLength="500"
          value={input.message}
          required
          rows="5"
          placeholder="Please enter your message"
          onChange={handleInput}
        />
        <button className="contact-btn" type="submit">Submit</button>
      </form>
    </>
  );
};

export default ContactForm;
