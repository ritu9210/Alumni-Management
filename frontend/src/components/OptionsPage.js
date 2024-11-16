import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

function OptionsPage() {
  return (
    <div>
      <h2>Options</h2>
      <Link to="/student-form">Student Form</Link>
      <br />
      <Link to="/alumni-form">Alumni Form</Link>
      <br />
      <Link to="/college-login">College Login</Link>
    </div>
  );
}

export default OptionsPage;