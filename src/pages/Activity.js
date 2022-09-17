import React from "react";
import "../css/Activity.css";

export default function Activity() {
  return (
    <div>
      <div class="ui left aligned raised segment">
        <div className="title">
          <h2>Activity</h2>
          <span>
            <i class="eye icon"></i>Only visible to you
          </span>
        </div>
        <div className="ui inverted divider"></div>
        <div className="head">
          <h3>You</h3>
          <span>5 days ago</span>
        </div>
        <span>Created the poll : pollAdi</span>
        <div className="ui inverted divider"></div>
        <h4>You</h4>
        <span>Created the poll : pollAdi</span>
      </div>
    </div>
  );
}
