import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const EmployerDashboard = () => {
  return (
    <div className="dashboard">
      <h2>👔 Welcome, Mahajan Enterprises!</h2>
      <div className="dashboard-grid">
        <div className="card">
          <h3>Post a Job</h3>
          <p>Create a new job listing.</p>
          <Link to="/post-job">Post Now</Link>
        </div>
        <div className="card">
          <h3>My Jobs</h3>
          <p>View and manage all job posts.</p>
          <Link to="/my-jobs">Manage Jobs</Link>
        </div>
        <div className="card">
          <h3>Applicants</h3>
          <p>See who has applied.</p>
          <Link to="/applicants">View Applicants</Link>
        </div>
        <div className="card">
          <h3>Company Profile</h3>
          <p>Update your business details.</p>
          <Link to="/company-profile">Edit Profile</Link>
        </div>
      </div>
    </div>
  );
};

export default EmployerDashboard;
