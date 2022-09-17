import React from "react";
import { Container, Grid } from "semantic-ui-react";
import "../css/PollList.css";
import Activity from "./Activity";

export default function PollList() {
  return (
    <Container>
      <div className="ui grid">
        <div className="eleven wide column">
          <div className="ui left aligned  raised  segment">
            <h2 classname="ui floated header">Polls</h2>
            <div className="ui clearing divider"></div>

            <h2>Question</h2>
            <h4>by Beyza Göbel - 3 days ago</h4>
            <div className="ui label">
              <i className="thumbs up icon"> 5 Vote</i>
            </div>

            <div className="ui inverted divider"></div>

            <h2>Question</h2>
            <h4>by Beyza Göbel - 3 days ago</h4>
            <div className="ui label">
              <i className="thumbs up icon"> 5 Vote</i>
            </div>
          </div>
        </div>
        <div className="five wide column">
          <Activity />
        </div>
      </div>
    </Container>
  );
}
