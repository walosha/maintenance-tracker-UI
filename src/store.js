import { createStore, applyMiddleware } from "redux";
import axios from "axios";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { rootReducer } from "./redux/reducers";

const persistConfig = {
  key: "root",
  storage
};

axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
  "jwt"
)}`;
const middlewares = [thunk, logger];
const persistedReducer = persistReducer(persistConfig, rootReducer);

let store = createStore(persistedReducer, applyMiddleware(...middlewares));
let persistor = persistStore(store);
export default { store, persistor };
