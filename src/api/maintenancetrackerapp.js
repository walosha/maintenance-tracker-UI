import axios from "axios";

export const maintenancetrackerapp = axios.create({
  baseURL: "http://127.0.0.1:3000/api/v1"
});
