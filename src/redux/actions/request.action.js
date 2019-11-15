import maintenancetrackerapp from "../../api/maintenancetrackerapp";
import history from "../../history";
import createObjectById from "../../utils/createObjectById";
import {
  POST_REQUEST,
  GET_REQUESTS,
  GET_REQUEST,
  DELETE_REQUEST
} from "../types";

export const postRequest = values => async (dispatch, getState) => {
  const res = await maintenancetrackerapp.post("/requests", values);

  // programmatically navigate to the Request Route Page
  history.push(`/${getState().data.user.name}/requests`);
  dispatch({ type: POST_REQUEST, payload: res.data.data.data });
};

export const getRequests = () => async dispatch => {
  const res = await maintenancetrackerapp.get("/requests");
  dispatch({
    type: GET_REQUESTS,
    payload: createObjectById(res.data.data.data)
  });
};
export const getRequest = id => async dispatch => {
  const res = await maintenancetrackerapp.get(`/requests/${id}`);

  dispatch({
    type: GET_REQUEST,
    payload: { [res.data.data.data._id]: res.data.data.data }
  });
};

export const deleteRequest = id => async dispatch => {
  await maintenancetrackerapp.delete(`/requests/${id}`);

  dispatch({ type: DELETE_REQUEST, payload: null });
};
