import React from "react";
import ReactDOM from "react-dom/client";
// import { App } from "./HelloEorlApp";
import { FirstApp } from "./FirstApp";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirstApp />
    {/* <App/> */}
  </React.StrictMode>
);
