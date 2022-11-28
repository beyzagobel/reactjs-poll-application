import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/Home.css";

export default function Home() {
  const navigate = useNavigate();

  const handleCreatePoll = ()  => {
    navigate("/create");
  };

  //kjdbjx
  return (
    <div>
      {/* <img src={} className="image" /> */}
      <button className="btn-hover color-4" onClick={handleCreatePoll}>Create a poll</button>
    </div>
  );
}
