import React from "react";
import LoginNavbar from "../layouts/LoginNavbar";
import { Container } from "semantic-ui-react";

export default function Login() {
  return (
    <div>
      <LoginNavbar />
      <Container>
        <div style>Create a free account</div>
        <div className="ui blue segment">
          <form className="ui form">
            <div className="field">
              <label>Name</label>
              <input type="text" placeholder=""></input>
            </div>
            <div className="field">
              <label>Name</label>
              <input type="text" placeholder=""></input>
            </div>
            <button class="positive ui button">Positive Button</button>
          </form>
        </div>
      </Container>
    </div>
  );
}
