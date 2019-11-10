import { maintenancetrackerapp } from "../../api/maintenancetrackerapp";
import { SIGN_IN, SIGN_UP, SIGN_OUT } from "../types/index";

export const signup = value => async dispatch => {
  const res = await maintenancetrackerapp.post("/api/v1/users/signup", value);
  console.log(res);

  dispatch({
    type: SIGN_UP,
    payload: res.data.data.user
  });
};
export const signin = value => async dispatch => {
  const res = await maintenancetrackerapp.post("/api/v1/users/signin", value);

  dispatch({
    type: SIGN_IN,
    payload: res.data.data.user
  });
};

export const signout = () => async dispatch => {
  await maintenancetrackerapp.get("/api/v1/users/signout");

  dispatch({
    type: SIGN_OUT,
    payload: {}
  });
};
