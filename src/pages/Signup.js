import React from "react";
import SignupNavbar from "../layouts/SignupNavbar";
import "../css/Signup.css";

export default function Signup() {
  return (
    <div>
      <SignupNavbar />
      <div className="contain">
        <div className="form-container sign-in-container">
          <form className="authForm">
            <h1 style={{ marginBottom: "40px" }}>Log in</h1>

            <div
              className="ui left icon input"
              style={{ marginBottom: "20px" }}
            >
              <input
                type="text"
                name="username"
                required
                placeholder="Username"
              />
              <i className="envelope icon"></i>
            </div>

            <div
              className="ui left icon input"
              style={{ marginBottom: "20px" }}
            >
              <input
                name="password"
                type="password"
                placeholder="Password"
                required
              />
              <i className="lock icon"></i>
            </div>

            <button type="submit" className="login">
              LOGIN
            </button>
          </form>
        </div>

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right">
              <h1 style={{ marginBottom: "50px" }}>Hello, Friend!</h1>
              <p style={{ marginBottom: "50px" }}>
                Enter your personal details and start journey with us
              </p>
              <button className="ghost" id="signUp">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
