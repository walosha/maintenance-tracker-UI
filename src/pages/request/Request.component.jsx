import React from "react";
import requireAuth from "../../hoc/requireAuth";

const Request = () => <h1> This is a Single Reqest component</h1>;

export default requireAuth(Request);
