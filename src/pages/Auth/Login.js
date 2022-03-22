import React from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

export function Login() {
  return (
    <div className="auth-container flex-center">
      <div className="auth-main-container flex-center">
        <div className="auth-title">
          <h2 className="text-center">Login</h2>
        </div>
        <form className="auth-main" onSubmit={(e) => e.preventDefault()}>
          <div className="auth-email">
            <label htmlFor="mail">Email Address</label>
            <input
              placeholder="test@gmail.com"
              className="text-input"
              type="text"
              required
            />
          </div>

          <div className="auth-pwd">
            <label htmlFor="pwd">Password</label>
            <input
              placeholder="***********"
              className="pwd-input"
              type="password"
              required
            />
          </div>

          <div className="auth-checkbox">
            <label className="select-input">
              <input
                type="checkbox"
                name="light"
                className="checkbox-input"
                value=""
              />
              <span className="text">Remember Me</span>
            </label>
            <a>Forgot your Password?</a>
          </div>

          <div className="auth-primary-btn text-center">
            Login with Test Credentials
          </div>

          <Link to="/signup">
            <div className="auth-secondary-btn text-center">
              Create New Account
              <i className="fa fa-chevron-right" aria-hidden="true"></i>
            </div>
          </Link>
        </form>
      </div>
    </div>
  );
}
