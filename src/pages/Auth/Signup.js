import React, { useState } from "react";
import "./Auth.css";
import { Link, useNavigate } from "react-router-dom";

export function Signup() {
  const navigate = useNavigate();

  return (
    <div className="auth-container flex-center">
      <div className="auth-main-container flex-center">
        <div className="auth-title">
          <h2 className="text-center">Sign Up</h2>
        </div>
        <div className="auth-main">
          <div className="first-last-wrapper">
            <div className="auth-firstname">
              <label htmlFor="firstname">First Name</label>
              <input
                placeholder="Test"
                className="text-input"
                type="text"
                required
              />
            </div>
            <div className="auth-lastname">
              <label htmlFor="lastname">Last Name</label>
              <input
                placeholder="Admin"
                className="text-input"
                type="text"
                required
              />
            </div>
          </div>
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
                required
              />
              <span className="text">I accept all Terms & Conditions</span>
            </label>
          </div>
          <div className="auth-primary-btn text-center">Create New Account</div>
          <Link to="/login">
            <div className="auth-secondary-btn text-center">
              Already have an account{" "}
              <i className="fa fa-chevron-right" aria-hidden="true"></i>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
