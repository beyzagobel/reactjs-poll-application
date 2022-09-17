import React from "react";
import Home from "../pages/Home";
import CreatePoll from "../pages/CreatePoll";
import PollList from "../pages/PollList";
import HomeNavbar from "./HomeNavbar";
import NotFound from "./NotFound";
import { Route, Routes, Navigate } from "react-router-dom";

function MainDashboard() {
  return (
    <div>
      <HomeNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreatePoll />} />
        <Route path="/polls" element={<PollList />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default MainDashboard;
