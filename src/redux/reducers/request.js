import { POST_REQUEST } from "../types";

const INITIAL_STATE = {
  request: ""
};

const requestReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POST_REQUEST:
      return { ...state, request: action.payload };

    default:
      return state;
  }
};

export default requestReducer;
