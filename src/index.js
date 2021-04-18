import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "@coreui/coreui/dist/css/coreui.css";
import App from "./App";
import { icons } from "./icons";

React.icons = icons;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
