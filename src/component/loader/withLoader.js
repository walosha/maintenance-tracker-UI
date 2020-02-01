import React, { Fragment } from "react";

import "./Loader.styles.scss";

const Loader = () => (
  <Fragment>
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
  </Fragment>
);

export default Loader;
