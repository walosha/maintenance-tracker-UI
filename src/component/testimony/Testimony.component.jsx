import React from "react";

import "./testimony.styles.scss";

const Testimony = () => {
  return (
    <div className="testimony u-center-text">
      <h2 className="heading-secondary">
        Here is what our Customers have to save!
      </h2>
      <div className="testimony__box">
        <div className="col-1-of-3">
          <div className="testimony__box--header">
            <div className="testimony__box__image">
              <img
                src="../../assets/hotel-1.jpg"
                alt="client"
                className="testimony__box__image-1"
              />
            </div>
            <div className="testimony__box--details">
              <div className="testimony__caption"></div>
              <div className="testimony__location"></div>
            </div>
          </div>
        </div>
        <div className="col-1-of-3">col-1-of-3</div>
        <div className="col-1-of-3">col-1-of-3</div>
      </div>
    </div>
  );
};

export default Testimony;
