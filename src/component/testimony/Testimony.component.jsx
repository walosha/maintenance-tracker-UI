import React from "react";

import "./testimony.styles.scss";
import Client from "../../assets/client-1.jpg";

const Testimony = ({ title, loc, content }) => {
  return (
    <div className="col-1-of-3">
      <div className="testimony__box">
        <div className="testimony__box--header">
          <div className="testimony__header--left">
            <img src={Client} alt="client" className="testimony__box--image" />
          </div>
          <div className="testimony__header--right">
            <div className="testimony__caption">
              <h2 className="heading-tertiary">{title}</h2>
            </div>
            <div className="testimony__location">
              <p className="paragraph-secondar">{loc}</p>
            </div>
          </div>
        </div>
        <div className="testtimony__box--details">
          <p className="paragraph-secondary">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimony;
