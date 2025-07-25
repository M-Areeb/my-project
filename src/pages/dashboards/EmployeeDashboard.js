import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const EmployeeDashboard = () => {
  return (
    <div className="dashboard">
      <h2>👷 Welcome, Raj!</h2>
      <div className="dashboard-grid">
        <div className="card">
          <h3>Available Jobs</h3>
          <p>Browse new job listings near you.</p>
          <Link to="/jobs">View Jobs</Link>
        </div>
        <div className="card">
          <h3>My Applications</h3>
          <p>Track your job applications.</p>
          <Link to="/my-applications">Check Status</Link>
        </div>
        <div className="card">
          <h3>Wallet</h3>
          <p>Balance: ₹1,500</p>
          <Link to="/wallet">Go to Wallet</Link>
        </div>
        <div className="card">
          <h3>Profile</h3>
          <p>Update your skills and info.</p>
          <Link to="/profile">Edit Profile</Link>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
