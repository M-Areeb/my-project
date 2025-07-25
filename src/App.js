
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import JobPostForm from './JobPostForm';
import Signup from './pages/Signup';
import Jobs from './pages/Jobs'; 
import Login from './pages/Login';


import EmployeeDashboard from './pages/dashboards/EmployeeDashboard';
import EmployerDashboard from './pages/dashboards/EmployerDashboard';
import PrivateRoute from './components/PrivateRoute';
import TestApi from './pages/TestApi';

function App() {
  console.log(Navbar);
  return (
    <Router>
      <Navbar /> {/* ✅ Navbar here */}
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/jobpostform" element={<JobPostForm />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/jobs" element={<Jobs />} />


                  <Route path="/test-api" element={<TestApi />} />
           {/* Dashboards */}
          <Route
          path="/employee/dashboard"
          element={<PrivateRoute element={<EmployeeDashboard />} role="employee" />}
        />
        <Route
          path="/employer/dashboard"
          element={<PrivateRoute element={<EmployerDashboard />} role="employer" />}
        />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

