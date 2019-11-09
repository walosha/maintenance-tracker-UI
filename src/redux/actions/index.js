import { maintenancetrackerapp } from "../../api/maintenancetrackerapp";
import { SIGN_IN } from "../types/index";

export const auth = value => async dispatch => {
  const res = await maintenancetrackerapp.post("/api/v1/users/signup", value);

  //history.push("/myaccount")
  dispatch({
    type: SIGN_IN,
    payload: res.data.data.user
  });
};
