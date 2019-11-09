import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import { reducer } from "./redux/reducers";

const middlewares = [thunk, logger];

export const store = createStore(reducer, applyMiddleware(...middlewares));
