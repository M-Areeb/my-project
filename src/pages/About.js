import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h2 className="typing-text">
        Empowering <span className="dynamic-word">Workers</span>
      </h2>

      <p>
        Blue Collar Jobs is a trusted digital marketplace connecting skilled and semi-skilled workers with reliable employers across India.
      </p>

      <h3>Our Mission</h3>
      <p>
        To empower the blue-collar workforce by offering verified job listings, fair daily wages, identity verification, and transparent ratings.
      </p>

      <h3>Why Choose Us?</h3>
      <ul>
        <li>✔ Verified workers and employers</li>
        <li>✔ Daily wage payouts to UPI or bank</li>
        <li>✔ Training and upskilling opportunities</li>
        <li>✔ Ratings and reviews for trust and transparency</li>
      </ul>
    </div>
  );
};

export default About;
