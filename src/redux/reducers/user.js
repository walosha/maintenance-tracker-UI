import { SIGN_IN, SIGN_UP, SIGN_OUT, GET_ME } from "../types/index";

const INITIAL_STATE = {
  user: {},
  auth: false
};
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_UP:
    case SIGN_IN:
    case SIGN_OUT:
    case GET_ME:
      return {
        ...state,
        user: action.payload,
        auth: Boolean(Object.keys(action.payload).length)
      };
    default:
      return state;
  }
};

export default userReducer;
