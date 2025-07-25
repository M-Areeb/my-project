import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Get in Touch</h2>
      <p className="contact-subtitle">Have a question or want to work with us? We'd love to hear from you.</p>

      <form className="contact-form">
        <label>
          Name:
          <input type="text" placeholder="Your name" required />
        </label>

        <label>
          Email:
          <input type="email" placeholder="Your email" required />
        </label>

        <label>
          Message:
          <textarea placeholder="Your message..." rows="5" required></textarea>
        </label>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
