import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

export default function AuthDashboard() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}
