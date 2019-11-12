import maintenancetrackerapp from "../../api/maintenancetrackerapp";
import { SIGN_IN, SIGN_UP, SIGN_OUT, GET_ME } from "../types/index";
import axios from "axios";

export const signup = value => async dispatch => {
  const res = await maintenancetrackerapp.post("/users/signup", value);
  window.localStorage.setItem("jwt", res.data.token);
  console.log(res.data.token);
  dispatch({
    type: SIGN_UP,
    payload: res.data.data.user
  });
};
export const signin = value => async dispatch => {
  const res = await maintenancetrackerapp.post("/users/signin", value);
  window.localStorage.setItem("jwt", res.data.token);
  console.log(res);
  dispatch({
    type: SIGN_IN,
    payload: res.data.data.user
  });
};

export const signout = () => async dispatch => {
  await maintenancetrackerapp.get("/users/signout");
  localStorage.removeItem("jwt");
  dispatch({
    type: SIGN_OUT,
    payload: {}
  });
};

export const getMe = () => async dispatch => {
  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${localStorage.getItem("jwt")}`;
  const res = await maintenancetrackerapp.get("/users/Me");
  dispatch({
    type: GET_ME,
    payload: res.data.data.user
  });
};
