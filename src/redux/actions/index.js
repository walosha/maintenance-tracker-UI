import axios from "axios";
import { SIGN_IN } from "../types/index";

export const auth = value => async dispatch => {
  const res = await axios.post(
    "https://maintenancetrackerapp.herokuapp.com/api/v1/users/signup",
    value
  );

  //history.push("/myaccount")
  dispatch({
    type: SIGN_IN,
    Payload: res.data.data
  });
};
