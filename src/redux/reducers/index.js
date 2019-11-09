import { combineReducers } from "redux";
import { SIGN_IN } from "../types/index";

const INITIAL_STATE = {
  user: {}
};
const signInReducer = (state = INITIAL_STATE, action) => {
  if (action.type === SIGN_IN) {
    return { ...state, user: action.payload };
  }
  return state;
};

export const reducer = combineReducers({ data: signInReducer });
