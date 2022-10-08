import React from "react";
import "../css/Activity.css";

export default function Activity() {
  return (
    <div class="ui left aligned raised segment">
      <h2 classname="ui floated header">Activity</h2>
      <h2>Activity</h2>
      <span>
        <i class="eye icon"></i>Only visible to you
      </span>
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
  );
}
