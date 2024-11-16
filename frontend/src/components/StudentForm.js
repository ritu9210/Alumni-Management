import React from 'react';
import './Register-Login.css'; // Import the CSS file

function StudentForm() {
  return (
    <div className="student-form-wrapper">
      <div className="student-form-container">
        <h2>Student Profile Form</h2>
        <form>
          <label>Name:</label>
          <input type="text" required />
          <br />
          <label>Email:</label>
          <input type="email" required />
          <br />
          <label>Password:</label>
          <input type="password" required />
          <br />
          <label>Re-enter Password:</label>
          <input type="password" required />
          <br />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default StudentForm;