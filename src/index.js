import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./store";

import App from "./App";

import "./main.scss";

ReactDOM.render(
  <Provider store={store.store}>
    <Router>
      <PersistGate loading={null} persistor={store.persistor}>
        <App />
      </PersistGate>
    </Router>
  </Provider>,
  document.getElementById("root")
);
