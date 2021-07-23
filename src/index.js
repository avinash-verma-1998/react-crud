import React from "react";
import ReactDOM from "react-dom";
// import 'regenerator-runtime/runtime'
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css"
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
