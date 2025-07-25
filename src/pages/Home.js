import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className="home-container">
      <header className="hero">
        <h1>Connecting Skilled Workers with Trusted Employers</h1>
              <p>Your gateway to daily wage jobs, verified employers, and financial freedom.</p>
              <Link to="/jobs">
                  <button>Explore Jobs</button>
        </Link>
      </header>

      <section className="features">
        <h2>Why Blue Collar Jobs?</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>✔ Verified Employers</h3>
            <p>All job posters are verified through KYC and reviews to ensure safety and trust.</p>
          </div>
          <div className="feature-card">
            <h3>💼 Skill-Based Matching</h3>
            <p>Get matched with jobs that fit your skills, experience, and location preferences.</p>
          </div>
          <div className="feature-card">
            <h3>💰 Daily Payments</h3>
            <p>Receive your wages instantly through UPI or bank transfer—no waiting!</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Ready to Work or Hire?</h2>
              <p>Join thousands of workers and employers already using our platform.</p>
              <Link to="/login">
                  <button>Get Started</button>
              </Link>
      </section>
    </div>
  );
};

export default Home;
