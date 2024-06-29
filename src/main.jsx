import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./Redux/store.js";
import { positions, transitions, Provider as Alertprovider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options = {
  timeout: 7000,
  position: positions.TOP_CENTER,
  transitions: transitions.SCALE,
};
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
    <BrowserRouter>
      <Alertprovider template={AlertTemplate} {...options}>   {/* ... ise Spread oprator khte h */}
        <App />
      </Alertprovider>
    </BrowserRouter>
  </Provider>
);
