import React from "react";
import { Link } from "react-router-dom";
import "../css/SignupNavbar.css";

export default function SignupNavbar() {
  return (
    <div className="ui inverted  menu">
      <div className="right  menu">
        <span style={{ margin: "10px", color: "white" }}>
          Already have an account ?
        </span>
        <a className="ui item active">
          <Link to="/login">Login</Link>
        </a>
      </div>
    </div>
  );
}
