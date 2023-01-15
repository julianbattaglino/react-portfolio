import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import './ContactMe.css';

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_f3w8m49', 'template_5ejx1db', form.current, 'QQ1yOj151Ud7RZlrY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" required />
      <label>Email</label>
      <input type="email" name="user_email" required/>
      <label>Message</label>
      <textarea name="message" required/>
      <button className="submit-btn" onClick={sendEmail} type="submit">Send</button>
    </form>
  );
};

export default ContactMe;