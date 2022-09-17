import React from "react";
import Home from "../pages/Home";
import Navbar from "./Navbar";
import { Route, Routes, Outlet } from "react-router";
import CreatePoll from "../pages/CreatePoll";
import PollList from "../pages/PollList";
import { Container } from "semantic-ui-react";
function MainDashboard() {
  return (
    <div>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreatePoll />} />
          <Route path="/polls" element={<PollList />} />
        </Routes>
      </Container>
    </div>
  );
}

export default MainDashboard;
