import React from "react";
import Success from "./Success";

export default function Login() {
  return (
    <div className="login">
      <Success />
      <div className="login-bg"></div>
      <h2 className="login-title">Login</h2>
      <form className="login-form">
        <div className="login-form-group">
          <input
            type="text"
            className="login-form-control"
            placeholder="Email"
          />
        </div>
        <div className="login-form-group">
          <input
            type="text"
            className="login-form-control"
            placeholder="Password"
          />
        </div>
        <div className="login-text">
          <div className="login-form-group">
            <input
              type="checkbox"
              className="login-form-control login-checkbox"
            />
            Remember Me
          </div>
          <a href="#forgot" className="login-forgot-text">
            Forgot password?
          </a>
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
        <div className="login-register-text">
          Need an account? <a href="#register">Register now</a>
        </div>
      </form>
    </div>
  );
}
