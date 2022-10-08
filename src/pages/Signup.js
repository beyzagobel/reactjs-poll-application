import React from "react";
import SignupNavbar from "../layouts/SignupNavbar";
import "../css/LoginSignup.css";
import { Container } from "semantic-ui-react";

export default function Signup() {
  return (
    <div>
      <SignupNavbar />
      <div className="authContainer">
        <div>
          <h1>Sign up</h1>
        </div>
        {/* <div className="ui divider"></div> */}
        <div className="ui green left aligned raised segment">
          <form className="ui inverted form">
            <div className="field">
              <label>Full Name</label>
              <input type="text" name="full-name" placeholder="First Name" />
            </div>
            <div className="field">
              <label>Username</label>
              <input type="text" name="username" placeholder="Username" />
            </div>
            <div className="field">
              <label>Password</label>
              <input type="password" name="password" placeholder="Password" />
            </div>
            <button className="violet fluid ui button" type="submit">
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
