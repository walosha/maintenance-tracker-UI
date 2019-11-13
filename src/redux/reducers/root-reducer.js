import { combineReducers } from "redux";
import userReducer from "./user";
import requestReducer from "./request";

export const rootReducer = combineReducers({
  data: userReducer,
  request: requestReducer
});
