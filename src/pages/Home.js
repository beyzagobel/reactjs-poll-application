import React from "react";
import { Container, Header } from "semantic-ui-react";
import image from "../img/home.png";
import "../css/Home.css";

export default function Home() {
  return (
    <div>
      <img src={image} className="image" />
      <button className="btn-hover color-4">Create a poll</button>
    </div>
  );
}
