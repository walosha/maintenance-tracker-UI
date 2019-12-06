import React from "react";

import "./Loader.styles.scss";

const Loader = () => (
  <>
    <div className="lds-roller">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </>
);

export default Loader;
