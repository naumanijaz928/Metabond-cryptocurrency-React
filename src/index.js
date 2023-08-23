import "react-app-polyfill/ie9";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "./assets/style/style.scss";
import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";

const App = lazy(() => import("./App"));

ReactDOM.render(
  <Suspense fallback={<div>Loading Please Wait...</div>}>
    <App />
  </Suspense>,
  document.getElementById("root")
);
