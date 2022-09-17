import React from "react";
import { Container, Header } from "semantic-ui-react";
import image from "../img/white.jpg";
import "../css/Home.css";

export default function Home() {
  return (
    <Container>
      <div
        className="dashboard"
        style={{ backgroundImage: `url(${image})`, backgroundSize: "100%" }}
      >
        <div className="icerik">
          <h1 className="dashboardH1">Create your poll in seconds </h1>
          <p className="dashboardP">
            Want to ask your friends where to go friday night or arrange a
            meeting with co-workers? Create a poll - and get answers in no time.
          </p>

          <button class="red fluid ui button">Create a poll</button>
        </div>
      </div>
    </Container>
  );
}
