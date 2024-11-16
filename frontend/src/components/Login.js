import React from "react";
import { Link } from "react-router-dom";
// import '../styles.css';
import "./Login.css";

function Login() {
  return (
    <div className="login-container">
      <div className="login-wrapper">
        <h2>Login</h2>
        <form>
          <div>
            <label>Email:</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" placeholder="Enter your password" required />
          </div>
          <button type="submit">Login</button>
        </form>
        <p>
          Not registered? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
