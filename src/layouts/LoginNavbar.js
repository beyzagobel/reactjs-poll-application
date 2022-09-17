import React from "react";
import { Menu, Container } from "semantic-ui-react";
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function LoginNavbar() {
  function handleLogin() {}
  return (
    <div className="ui secondary  menu">
      <div className="right menu">
        <span style={{ margin: "10px" }}>Don't have an account yet ?</span>
        <a className="ui item active">
          <Link to="/signup">Sign up</Link>
        </a>
      </div>
    </div>
  );
}
