import { combineReducers } from "redux";
import { SIGN_IN, SIGN_UP, SIGN_OUT } from "../types/index";

const INITIAL_STATE = {
  user: {}
};
const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_UP:
      return { ...state, user: action.payload };
    case SIGN_IN:
      return { ...state, user: action.payload };
    case SIGN_OUT:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({ data: AuthReducer });
