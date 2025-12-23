import React from "react";
import { Link } from "react-router-dom";
import "./LoginSignup.css";

export default function Signup() {
  return (
    <div className="auth-container">
      <div className="auth-box">

        <div className="auth-header">
          <i className="fas fa-user-plus auth-icon"></i>
          <h2>Create Account</h2>
        </div>

        <form className="auth-form">

          <div className="auth-input">
            <i className="fas fa-user"></i>
            <input type="text" placeholder="Full Name" />
          </div>

          <div className="auth-input">
            <i className="fas fa-envelope"></i>
            <input type="email" placeholder="Email ID" />
          </div>

          <div className="auth-input">
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="Password" />
          </div>

          <button className="auth-button">SIGN UP</button>

          <p className="switch-text">
            Already have an account?{" "}
            <Link to="/login" className="switch-link">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
