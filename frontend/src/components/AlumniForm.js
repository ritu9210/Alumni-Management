import React from 'react';
import './AlumniForm.css'; // Import the CSS file

function AlumniForm() {
  return (
    <div className="alumni-form-wrapper">
      <div className="alumni-form-container">
        <h2>Alumni Profile Form</h2>
        <form>
          <label>Name:</label>
          <input type="text" required />
          <br />
          <label>Email:</label>
          <input type="email" required />
          <br />
          <label>LinkedIn ID:</label>
          <input type="url" required />
          <br />
          <label>Occupation:</label>
          <input type="text" required />
          <br />
          <label>Company:</label>
          <input type="text" required />
          <br />
          <label>Batch:</label>
          <input type="text" required />
          <br />
          <label>Course:</label>
          <input type="text" required />
          <br />
          <label>Location:</label>
          <input type="text" required />
          <br />
          <label>Gender:</label>
          <input type="radio" name="gender" value="Male" /> Male
          <input type="radio" name="gender" value="Female" /> Female
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default AlumniForm;