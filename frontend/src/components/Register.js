import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'; // Import the specific CSS file for Register page

function Register() {
  return (
    <div className="register-page">
      <div className="register-container">
        <h2>Register</h2>
        <div className="register-options">
          <div>
            <Link to="/student-form">Register as Student</Link>
          </div>
          <div>
            <Link to="/alumni-form">Register as Alumni</Link>
          </div>
        </div>
        <div className="form-link">
          <Link to="/college-login">College Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Register;