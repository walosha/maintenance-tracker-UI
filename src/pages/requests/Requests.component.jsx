import React from "react";
import requireAuth from "../../hoc/requireAuth";

const Requests = ({ hello }) => {
  return (
    <div>
      <h1>This is a Request Component</h1>
    </div>
  );
};

export default requireAuth(Requests);
