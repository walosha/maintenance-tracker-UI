import maintenancetrackerapp from "../../api/maintenancetrackerapp";
import history from "../../history";
import { POST_REQUEST } from "../types";

export const postRequest = values => async (dispatch, getState) => {
  const res = await maintenancetrackerapp.post("/requests", values);

  // programmatically navigate to the Request Route Page
  history.push(`/${getState().data.user.name}/requests`);
  dispatch({ type: POST_REQUEST, payload: res.data.data.data });
};

export const getRequest = values => async dispatch => {
  const res = await maintenancetrackerapp.get("/requests");

  dispatch({ type: POST_REQUEST, payload: res.data.data.data });
};
