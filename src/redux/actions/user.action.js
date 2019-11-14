import maintenancetrackerapp from "../../api/maintenancetrackerapp";
import { reduxActionFactory } from "../../utils/reduxActionFactory";
import { SIGN_IN, SIGN_UP, SIGN_OUT, GET_ME } from "../types/index";

export const signup = value =>
  reduxActionFactory(value)(SIGN_UP, "post", "signup");

export const signin = value =>
  reduxActionFactory(value)(SIGN_IN, "post", "signin");

export const signout = () => async dispatch => {
  await maintenancetrackerapp.get("/users/signout");
  localStorage.removeItem("jwt");
  dispatch({
    type: SIGN_OUT,
    payload: {}
  });
};

export const getMe = () => async dispatch => {
  const res = await maintenancetrackerapp.get("/users/Me");
  dispatch({
    type: GET_ME,
    payload: res.data.data.user
  });
};
