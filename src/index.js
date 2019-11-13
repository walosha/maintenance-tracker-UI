import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import store from "./store";

import App from "./App";

import "./main.scss";
const theme = {
  color: "#ba68c8",
  background1: "#eeeeee",
  background2: "#757575"
};
ReactDOM.render(
  <Router>
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
