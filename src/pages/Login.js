import React from "react";
import LoginNavbar from "../layouts/LoginNavbar";
import { Container } from "semantic-ui-react";
import "../css/LoginSignup.css";

export default function Login() {
  return (
    <div>
      <LoginNavbar />
      <div className="authContainer">
        <div>
          <h1>Login</h1>
        </div>
        {/* <div className="ui  divider"></div> */}
        <div class="ui green left aligned raised  segment">
          <form class="ui inverted form">
            <div class="field">
              <label>Username</label>
              <input type="text" name="username" placeholder="Username" />
            </div>
            <div class="field">
              <label>Password</label>
              <input type="password" name="password" placeholder="Password" />
            </div>

            <button class="violet fluid ui button" type="submit">
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
