// src/pages/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Login.css'; // Make sure this path is correct

const Login = () => {
  const [role, setRole] = useState('employee');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    login(role, email); // Save email as username

    if (role === 'employee') {
      navigate('/employee/dashboard');
    } else {
      navigate('/employer/dashboard');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <p className="subtitle">Access your account to find or post jobs.</p>
      <form onSubmit={handleLogin} className="login-form">
        <label>
          Role:
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="employee">Employee</option>
            <option value="employer">Employer</option>
          </select>
        </label>

        <label>
          Email:
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Your password"
          />
        </label>

        <button type="submit">Login</button>
      </form>

      <p className="signup-link">Don't have an account? <a href="/signup">Sign up here</a></p>
    </div>
  );
};

export default Login;
