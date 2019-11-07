import React from "react";

import "./testimony.styles.scss";
import Client from "../../assets/client-1.jpg";

const Testimony = () => {
  return (
    <div className="testimony u-center-text">
      <div className="testimony-header  u-mb-big">
        <h2 className="heading-secondary">
          Here is what our Customers have to say!
        </h2>
      </div>
      <div className="row">
        <div className="col-1-of-3">
          <div className="testimony__box">
            <div className="testimony__box--header">
              <div className="testimony__header--left">
                <img
                  src={Client}
                  alt="client"
                  className="testimony__box--image"
                />
              </div>
              <div className="testimony__header--right">
                <div className="testimony__caption">
                  <h2 className="heading-tertiary">
                    This really made our life so easy !
                  </h2>
                </div>
                <div className="testimony__location">
                  <p className="paragraph-secondar">Lagos, Nigeria</p>
                </div>
              </div>
            </div>
            <div className="testtimony__box--details">
              <p className="paragraph-secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus quos iste expedita illum, autem ipsum dolorum
                obcaecati modi a amet atque eveniet consectetur ab corporis
                voluptate nobis exercitationem reiciendis? Voluptates!
              </p>
            </div>
          </div>
        </div>
        <div className="col-1-of-3">
          <div className="testimony__box">
            <div className="testimony__box--header">
              <div className="testimony__header--left">
                <img
                  src={Client}
                  alt="client"
                  className="testimony__box--image"
                />
              </div>
              <div className="testimony__header--right">
                <div className="testimony__caption">
                  <h2 className="heading-tertiary">
                    This really made our life so easy !
                  </h2>
                </div>
                <div className="testimony__location">
                  <p className="paragraph-secondar">Lagos, Nigeria</p>
                </div>
              </div>
            </div>
            <div className="testtimony__box--details">
              <p className="paragraph-secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus quos iste expedita illum, autem ipsum dolorum
                obcaecati modi a amet atque eveniet consectetur ab corporis
                voluptate nobis exercitationem reiciendis? Voluptates!
              </p>
            </div>
          </div>
        </div>
        <div className="col-1-of-3">
          <div className="testimony__box">
            <div className="testimony__box--header">
              <div className="testimony__header--left">
                <img
                  src={Client}
                  alt="client"
                  className="testimony__box--image"
                />
              </div>
              <div className="testimony__header--right">
                <div className="testimony__caption">
                  <h2 className="heading-tertiary">
                    This really made our life so easy !
                  </h2>
                </div>
                <div className="testimony__location">
                  <p className="paragraph-secondar">Lagos, Nigeria</p>
                </div>
              </div>
            </div>
            <div className="testtimony__box--details">
              <p className="paragraph-secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus quos iste expedita illum, autem ipsum dolorum
                obcaecati modi a amet atque eveniet consectetur ab corporis
                voluptate nobis exercitationem reiciendis? Voluptates!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimony;
