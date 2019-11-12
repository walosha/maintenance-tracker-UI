import React from "react";
import requireAuth from "../../hoc/requireAuth";

const InMail = () => {
  return (
    <div>
      <h1>INBOX MESSAGES </h1>
    </div>
  );
};
export default requireAuth(InMail);
