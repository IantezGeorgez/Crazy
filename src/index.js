import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// true 2 years , false 6 years
// const showTwoPage = /calcutta|kolkata/.test(Intl.DateTimeFormat().resolvedOptions().timeZone.toLowerCase())
const showTwoPage = true

ReactDOM.render(
  <React.StrictMode>
    <App show={showTwoPage} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
