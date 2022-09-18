import React from "react";
import SignupNavbar from "../layouts/SignupNavbar";
import "../css/LoginSignup.css";
import { Container } from "semantic-ui-react";

export default function Signup() {
  return (
    <div className="base">
      <SignupNavbar />
      <div className="authContainer">
        <div className="signup">
          <h1>Sign up</h1>
        </div>
        <div className="ui olive left aligned raised segment">
          <div className="ui two column very relaxed grid">
            <div className="column">
              <form className="ui form">
                <div className="field">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="first-name"
                    placeholder="First Name"
                  />
                </div>
                <div className="field">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="first-name"
                    placeholder="First Name"
                  />
                </div>
                <div className="field">
                  <label>Last Name</label>
                  <input type="text" name="last-name" placeholder="Last Name" />
                </div>

                <button className="violet fluid ui button" type="submit">
                  Log in
                </button>
              </form>
            </div>

            <div className="column" id="rightColumn">
              <h1 className="ui header">Hello World</h1>
              <p className="text">
                Enter your personal details and start journey with us
              </p>
              <button class="ui olive button">Signup</button>
            </div>
          </div>
          <div className="ui vertical  divider">*</div>
        </div>
      </div>
    </div>
  );
}
