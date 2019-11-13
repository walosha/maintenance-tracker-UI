import maintenancetrackerapp from "../../api/maintenancetrackerapp";
import { POST_REQUEST } from "../types";

export const postRequest = values => async dispatch => {
  const res = await maintenancetrackerapp.post("/requests", values);
  dispatch({ type: POST_REQUEST, payload: res.data.data.data });
};
