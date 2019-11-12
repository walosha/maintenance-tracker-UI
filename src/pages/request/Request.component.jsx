import React from "react";
import requireAuth from "../../hoc/requireAuth";

const Request = () => {
  return <div> This is a Single Reqest component</div>;
};

export default requireAuth(Request);
