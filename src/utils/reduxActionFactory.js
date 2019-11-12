import maintenancetrackerapp from "../api/maintenancetrackerapp";

export const reduxActionFactory = value => (
  type,
  httpMethod,
  endpoint
) => async dispatch => {
  const res = await maintenancetrackerapp[httpMethod](
    `/users/${endpoint}`,
    value
  );
  window.localStorage.setItem("jwt", res.data.token);

  dispatch({
    type: type,
    payload: res.data.data.user
  });
};
