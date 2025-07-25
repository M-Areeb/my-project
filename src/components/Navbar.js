import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Make sure this file exists

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="logo">Blue Collar Jobs</h1>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/jobpostform">JobPostForm</Link>
          
          <Link to="/login">Login</Link>
          <Link to="/jobs">Jobs</Link>

          <Link to="/employee/dashboard">Employee Dashboard</Link>
<Link to="/employer/dashboard">Employer Dashboard</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
