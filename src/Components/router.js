import React from "react";
// react router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// pages
import Home from "./home";
import DuaLipa from "./duaLipa";

const ReactRouterSetup = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dualipa" element={<DuaLipa />} />
      </Routes>
    </Router>
  );
};

export default ReactRouterSetup;
