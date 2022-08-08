import React, { useState } from "react";
import show from "../../assets/icons/show.svg";
import hidden from "../../assets/icons/hidden.svg";
import { LoginType } from "../../core/types";
import Success from "./Success";

type Props = {
  login: LoginType | null;
  input: LoginType;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
};

export default function Login(props: Props) {
  const { login, input, onChange, onSubmit } = props;

  const [showPassword, setShowPassword] = useState(false);

  if (login) {
    return (
      <div className="login">
        <div className="login-bg"></div>
        <Success />
      </div>
    );
  }

  return (
    <div className="login">
      <div className="login-bg"></div>
      <h2 className="login-title">Login</h2>
      <form className="login-form" onSubmit={onSubmit}>
        <div className="login-form-group">
          <input
            type="text"
            className="login-form-control"
            placeholder="Email"
            name="email"
            value={input.email}
            onChange={onChange}
            required
          />
        </div>
        <div className="login-form-group">
          <input
            type={showPassword ? "text" : "password"}
            className="login-form-control"
            placeholder="Password"
            name="password"
            value={input.password}
            onChange={onChange}
            minLength={6}
            required
          />
          <img
            src={!showPassword ? show : hidden}
            alt="show"
            onClick={() => setShowPassword((prev) => !prev)}
          />
        </div>
        <div className="login-text">
          <div className="login-form-group login-form-group-checkbox">
            <input
              type="checkbox"
              className="login-form-control login-checkbox"
              name="remember"
              value={input.remember ? "true" : "false"}
              onChange={onChange}
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
