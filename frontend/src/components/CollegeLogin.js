import React from 'react';
import './CollegeLogin.css';

function CollegeLogin() {
  return (
    <div className="college-login-wrapper">
      <div className="college-login-container">
        <h2>College Login</h2>
        <form>
          <label>Email:</label>
          <input type="email" required />
          <br />
          <label>Password:</label>
          <input type="password" required />
          <br />
          <label>Re-Enter Password:</label>
          <input type="password" required />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default CollegeLogin;