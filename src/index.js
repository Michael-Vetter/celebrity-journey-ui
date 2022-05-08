import React from "react";
import ReactDOM from "react-dom";
import "@zach.codes/react-calendar/dist/calendar-tailwind.css";
import "react-simple-tree-menu/dist/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
