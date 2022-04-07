import React from "react";
import { Link } from "react-router-dom";

import "./Auth.css";
export function ForgetPwd() {
  return (
    <div className="auth-container flex-center">
      <div className="auth-main-container flex-center">
        <div className="auth-title">
          <h2 className="text-center">Forgot Password ?</h2>
        </div>
        <div className="auth-main">
          <div className="auth-email">
            <label for="mail">Email Address</label>
            <input placeholder="test@gmail.com" className="text-input" type="text" />
          </div>
        </div>
        <div className="auth-primary-btn text-center">Reset Password</div>
        <Link to="/login">
          <div className="auth-secondary-btn text-center">
            <i className="fa fa-chevron-left" aria-hidden="true"></i>
            Back to Sign In
          </div>
        </Link>
      </div>
    </div>
  );
}
