import maintenancetrackerapp from "../../api/maintenancetrackerapp";
import history from "../../history";
import { POST_REQUEST, GET_REQUEST, DELETE_REQUEST } from "../types";

export const postRequest = values => async (dispatch, getState) => {
  const res = await maintenancetrackerapp.post("/requests", values);

  // programmatically navigate to the Request Route Page
  history.push(`/${getState().data.user.name}/requests`);
  dispatch({ type: POST_REQUEST, payload: res.data.data.data });
};

export const getRequest = () => async dispatch => {
  const res = await maintenancetrackerapp.get("/requests");
  console.log(res.data.data.data);
  dispatch({ type: GET_REQUEST, payload: res.data.data.data });
};

export const deleteRequest = request => async dispatch => {
  await maintenancetrackerapp.delete("/requests", request);

  dispatch({ type: DELETE_REQUEST, payload: null });
};
