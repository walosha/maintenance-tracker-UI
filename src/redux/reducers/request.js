import {
  POST_REQUEST,
  GET_REQUESTS,
  GET_REQUEST,
  UPDATE_REQUEST,
  DELETE_REQUEST
} from "../types";

const INITIAL_STATE = {
  request: {},
  newRequest: null
};

const requestReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POST_REQUEST:
      return state;
    case GET_REQUESTS:
      return { ...state, request: action.payload };
    case UPDATE_REQUEST:
      return {
        ...state,
        request: { ...state.request, [action.payload._id]: action.payload }
      };
    case DELETE_REQUEST:
      return { ...state, request: action.payload };
    case GET_REQUEST:
      return { ...state, newRequest: action.payload };

    default:
      return state;
  }
};

export default requestReducer;
