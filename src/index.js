import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import axios from "axios";
import { PersistGate } from "redux-persist/integration/react";
import history from "./history";
import { Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import store from "./store";

import App from "./App";

import "./main.scss";
axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
  "jwt"
)}`;

const theme = {
  color: "#ba68c8",
  background1: "#eeeeee",
  background2: "#757575"
};
ReactDOM.render(
  <Router history={history}>
    <Provider store={store.store}>
      <ThemeProvider theme={theme}>
        <PersistGate loading={null} persistor={store.persistor}>
          <App />
        </PersistGate>
      </ThemeProvider>
    </Provider>
  </Router>,
  document.getElementById("root")
);
