import React from "react";
import { Link } from "react-router-dom";

import "./Auth.css";
export function ForgetPwd() {
  return (
    <div class="auth-container flex-center">
      <div class="auth-main-container flex-center">
        <div class="auth-title">
          <h2 class="text-center">Forgot Password ?</h2>
        </div>
        <div class="auth-main">
          <div class="auth-email">
            <label for="mail">Email Address</label>
            <input placeholder="test@gmail.com" class="text-input" type="text" />
          </div>
        </div>
        <div class="auth-primary-btn text-center">
          <a href="#" target="_blank" class="link-btn">
            Reset Password
          </a>
        </div>
        <Link to="/login">
          <div class="auth-secondary-btn text-center">
            <i class="fa fa-chevron-left" aria-hidden="true"></i>
            Back to Sign In
          </div>
        </Link>
      </div>
    </div>
  );
}
