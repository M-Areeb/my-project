
/*
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const JobPostForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    skills: '',
    salary: '',
    jobType: 'full-time',
    startDate: '',
    contact: '',
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
    setValidated(false); // reset validation as user types
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title && formData.description && formData.location && formData.contact) {
      console.log('Job Posted:', formData);
      setShowSuccess(true);
      setValidated(false);
      setFormData({
        title: '',
        description: '',
        location: '',
        skills: '',
        salary: '',
        jobType: 'full-time',
        startDate: '',
        contact: '',
      });
      setTimeout(() => setShowSuccess(false), 4000); // auto-hide success alert
    } else {
      setValidated(true);
    }
  };

  return (
    <div className="container my-5">
      <div className="card shadow-lg border-0 rounded-4">
        <div className="card-header text-white text-center py-4" style={{ background: "linear-gradient(90deg, #007bff, #00bfff)" }}>
          <h3 className="mb-0">📋 Post a Job</h3>
          <p className="mb-0 small">Find the right worker fast and easy</p>
        </div>

        <div className="card-body p-4">
          {showSuccess && (
            <div className="alert alert-success text-center fw-semibold" role="alert">
              🎉 Job posted successfully!
            </div>
          )}

          <form noValidate onSubmit={handleSubmit}>
            
            <div className="mb-3">
              <label className="form-label fw-semibold">Job Title *</label>
              <input type="text" className={`form-control ${validated && !formData.title && 'is-invalid'}`} name="title" value={formData.title} onChange={handleChange} required />
            </div>

          
            <div className="mb-3">
              <label className="form-label fw-semibold">Job Description *</label>
              <textarea className={`form-control ${validated && !formData.description && 'is-invalid'}`} rows="3" name="description" value={formData.description} onChange={handleChange} required />
            </div>

            
            <div className="mb-3">
              <label className="form-label fw-semibold">Location *</label>
              <input type="text" className={`form-control ${validated && !formData.location && 'is-invalid'}`} name="location" value={formData.location} onChange={handleChange} required />
            </div>

           
            <div className="mb-3">
              <label className="form-label fw-semibold">Required Skills</label>
              <input type="text" className="form-control" name="skills" value={formData.skills} onChange={handleChange} />
            </div>

           
            <div className="mb-3">
              <label className="form-label fw-semibold">Salary / Daily Wage</label>
              <input type="text" className="form-control" name="salary" value={formData.salary} onChange={handleChange} />
            </div>

         
            <div className="mb-3">
              <label className="form-label fw-semibold">Job Type</label>
              <select className="form-select" name="jobType" value={formData.jobType} onChange={handleChange}>
                <option value="full-time">Full-time</option>
                <option value="part-time">Part-time</option>
                <option value="contract">Contract</option>
              </select>
            </div>

           
            <div className="mb-3">
              <label className="form-label fw-semibold">Start Date</label>
              <input type="date" className="form-control" name="startDate" value={formData.startDate} onChange={handleChange} />
            </div>

            
            <div className="mb-3">
              <label className="form-label fw-semibold">Contact Info *</label>
              <input type="text" className={`form-control ${validated && !formData.contact && 'is-invalid'}`} name="contact" value={formData.contact} onChange={handleChange} required />
            </div>

           
            <div className="d-grid mt-4">
              <button type="submit" className="btn btn-primary btn-lg shadow-sm">🚀 Post Job</button>
            </div>
          </form>
        </div>
      </div>

    
      <div className="card mt-5 shadow-sm border-0">
        <div className="card-header bg-light">
          <h5 className="mb-0">👀 Live Job Preview</h5>
        </div>
        <div className="card-body">
          <h4 className="text-primary">{formData.title || "Job Title"}</h4>
          <p><strong>Type:</strong> {formData.jobType}</p>
          <p><strong>Description:</strong> {formData.description || "Job description will appear here."}</p>
          <p><strong>Location:</strong> {formData.location}</p>
          <p><strong>Skills:</strong> {formData.skills}</p>
          <p><strong>Salary:</strong> {formData.salary}</p>
          <p><strong>Start Date:</strong> {formData.startDate}</p>
          <p><strong>Contact:</strong> {formData.contact}</p>
        </div>
      </div>
    </div>
  );
};

export default JobPostForm;
*/

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function JobPostForm() {
  const [job, setJob] = useState({
    title: '',
    description: '',
    location: '',
    company: ''
  });

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://localhost:5001/api/jobs', job)
      .then(() => {
        alert('✅ Job posted!');
        setJob({ title: '', description: '', location: '', company: '' }); // reset form
      })
      .catch(error => console.error('Error posting job:', error));
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h3 className="mb-4 text-center">Post a Job</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              name="title"
              value={job.title}
              onChange={handleChange}
              className="form-control"
              placeholder="Job Title"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              name="description"
              value={job.description}
              onChange={handleChange}
              className="form-control"
              placeholder="Job Description"
              rows={3}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Location</label>
            <input
              name="location"
              value={job.location}
              onChange={handleChange}
              className="form-control"
              placeholder="Job Location"
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label">Company</label>
            <input
              name="company"
              value={job.company}
              onChange={handleChange}
              className="form-control"
              placeholder="Company Name"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">Post Job</button>
        </form>
      </div>
    </div>
  );
}

export default JobPostForm;
