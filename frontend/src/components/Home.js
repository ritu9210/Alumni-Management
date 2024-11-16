import React from 'react';
import './Home.css'; // Adjust the path if needed

function Home() {
  return (
    <div className="home-page">
      <div className="home-container">
        <h1>Welcome to the JNU Alumni Information Portal</h1>
        <p>
          This platform is designed for current students, alumni, and college administrators
          to connect and share valuable information. Register or log in to get started.
        </p>
        <div>
          <a href="/register">Register</a>
          <a href="/login">Login</a>
        </div>
      </div>
    </div>
  );
}

export default Home;