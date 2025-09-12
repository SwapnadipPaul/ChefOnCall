import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./pages/Login";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}