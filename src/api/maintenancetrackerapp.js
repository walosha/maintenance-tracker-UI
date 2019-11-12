import axios from "axios";
let maintenancetrackerapp;

if (process.env.NODE_ENV === "development") {
  maintenancetrackerapp = axios.create({
    baseURL: "http://127.0.0.1:3000/api/v1"
  });
} else {
  maintenancetrackerapp = axios.create({
    baseURL: "https://maintenancetrackerapp.herokuapp.com/api/v1"
  });
}

export default maintenancetrackerapp;
