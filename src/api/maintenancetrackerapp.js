import axios from "axios";

export const maintenancetrackerapp = axios.create({
  baseURL: "https://maintenancetrackerapp.herokuapp.com/api/v1"
});
