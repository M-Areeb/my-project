import React from 'react';
import './Jobs.css'; // You can style it as per your needs
import { Link } from 'react-router-dom';
const jobList = [
  {
    id: 1,
    title: 'Electrician',
    company: 'SparkTech Services',
    location: 'Mumbai, MH',
    pay: '₹800/day',
    posted: '2 hours ago'
  },
  {
    id: 2,
    title: 'Delivery Boy',
    company: 'Swift Logistics',
    location: 'Delhi, DL',
    pay: '₹750/day',
    posted: '1 day ago'
  },
  {
    id: 3,
    title: 'Plumber',
    company: 'AquaFix',
    location: 'Bangalore, KA',
    pay: '₹900/day',
    posted: '5 hours ago'
  },
  {
    id: 4,
    title: 'Construction Labor',
    company: 'BuildWell Co.',
    location: 'Pune, MH',
    pay: '₹700/day',
    posted: 'Today'
  },
  {
    id: 5,
    title: 'Nure',
    company: 'Mahajan',
    location: 'Pune, MH',
    pay: '₹700/day',
    posted: 'Today'
  },
  {
    id: 5,
    title: 'House Keeper',
    company: 'BuildWell Co.',
    location: 'Pune, MH',
    pay: '₹700/day',
    posted: 'Today'
  },
  {
    id: 6,
    title: 'Barber',
    company: 'Javed Habib  Co.',
    location: 'Pune, MH',
    pay: '₹700/day',
    posted: 'Today'
  }
];

const Jobs = () => {
  return (
    <div className="jobs-container">
      <h2 className="animated-heading">Available Jobs Near You</h2>
      <div className="jobs-grid">
        {jobList.map((job) => (
          <div key={job.id} className="job-card">
            <h3>{job.title}</h3>
            <p><strong>Company:</strong> {job.company}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Pay:</strong> {job.pay}</p>
                <p className="posted-time">{job.posted}</p>
                <Link to="/login">
                    <button className="apply-btn">Apply Now</button>
            </Link>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
/*
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get('https://localhost:5001/api/jobs')
      .then(response => setJobs(response.data))
      .catch(error => console.error('Error fetching jobs:', error));
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Available Job Listings</h2>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {jobs.map(job => (
          <div key={job.id} className="col">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{job.title}</h5>
                <p className="card-text">{job.description}</p>
              </div>
              <div className="card-footer bg-white border-top-0">
                <small className="text-muted">{job.location} • {job.company}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Jobs;
*/