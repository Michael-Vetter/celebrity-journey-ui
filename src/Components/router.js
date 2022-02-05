import React from "react";
// react router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// pages
import Home from "./home";
import DuaLipa from "./duaLipa";
import MainTab from "./mainTab";

const ReactRouterSetup = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/dualipa" element={<DuaLipa />} /> */}
        <Route path="/dualipa" element={<MainTab />} />
      </Routes>
    </Router>
  );
};

export default ReactRouterSetup;
