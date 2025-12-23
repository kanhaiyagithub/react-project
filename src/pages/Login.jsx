import React from "react";
import { Link } from "react-router-dom";
import "./LoginSignup.css"; // shared CSS

export default function Login() {
  return (
    <div className="auth-container">
      <div className="auth-box">

        <div className="auth-header">
          <i className="fas fa-user auth-icon"></i>
          <h2>User Login</h2>
        </div>

        <form className="auth-form">
          <div className="auth-input">
            <i className="fas fa-envelope"></i>
            <input type="email" placeholder="Email ID" />
          </div>

          <div className="auth-input">
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="Password" />
          </div>

          <div className="auth-options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <Link to="/forgot-password" className="forgot-link">
              Forgot Password?
            </Link>
          </div>

          <button className="auth-button">LOGIN</button>

          <p className="switch-text">
            Don’t have an account?{" "}
            <Link to="/signup" className="switch-link">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
