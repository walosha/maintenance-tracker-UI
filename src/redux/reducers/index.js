import { combineReducers } from "redux";
import { SIGN_IN } from "../types/index";

const data = {
  user: {}
};
const signInReducer = (state = data, action) => {
  if (action.type === SIGN_IN) {
    return { ...state, user: action.payload };
  }
  return state;
};

export const reducer = combineReducers({ signInReducer });
