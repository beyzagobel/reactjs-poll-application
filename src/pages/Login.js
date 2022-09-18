import React from "react";
import LoginNavbar from "../layouts/LoginNavbar";
import { Container } from "semantic-ui-react";
import "../css/LoginSignup.css";

export default function Login() {
  return (
    <div className="base">
      <LoginNavbar />
      <div className="authContainer">
        <div className="signup">
          <h1>Sign up</h1>
        </div>
        <div class="ui  left aligned  inverted segment">
          <div className="ui two column very relaxed grid">
            <div className="column">
              <form class="ui inverted form">
                <div class="field">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="first-name"
                    placeholder="First Name"
                  />
                </div>
                <div class="field">
                  <label>Last Name</label>
                  <input type="text" name="last-name" placeholder="Last Name" />
                </div>

                <button class="violet fluid ui button" type="submit">
                  Log in
                </button>
              </form>
            </div>
            <div className="column" id="rightColumn">
              <h1 className="ui header">Hello World</h1>
              <p className="text">
                Enter your personal details and start journey with us
              </p>
              <button class="ui olive button">Log in</button>
            </div>
          </div>
          <div className="ui vertical  divider">*</div>
        </div>
      </div>
    </div>
  );
}
