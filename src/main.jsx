import React from "react";
import ReactDOM from "react-dom/client";
// import { App } from "./HelloEorlApp";
// import { FirstApp } from "./FirstApp";
import {CounterApp} from "./CounterApp"
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CounterApp value={0}/>
    {/* <FirstApp /> */}
    {/* <App/> */}
  </React.StrictMode>
);
