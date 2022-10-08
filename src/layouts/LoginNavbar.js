import React from "react";
import { Menu, Container } from "semantic-ui-react";
import { Link, Navigate, useNavigate } from "react-router-dom";
export default function LoginNavbar() {
  return (
    <div className="ui inverted menu">
      <div className="right menu">
        <span style={{ margin: "10px", color: "white" }}>
          Don't have an account yet ?
        </span>
        <a className="ui item active">
          <Link to="/signup">Sign up</Link>
        </a>
      </div>
    </div>
  );
}
