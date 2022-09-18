import React from "react";
import { Link } from "react-router-dom";
import "../css/SignupNavbar.css";

export default function AuthNavbar() {
  return (
    <div className="ui secondary  menu">
      <div className="right menu">
        <span style={{ margin: "10px" }}>Already have an account ?</span>
        <a className="ui item active">
          <Link to="/login">Login</Link>
        </a>
      </div>
    </div>
  );
}
