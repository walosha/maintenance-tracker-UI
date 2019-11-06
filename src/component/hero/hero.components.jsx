import React from "react";
import Carousel from "../carousel/carousel.components";

import "../hero/hero.styles.scss";

const Hero = () => (
  <div className="hero">
    <div className="row">
      <div className="col-1-of-2">
        <div className="hero__header">
          <h1 className="heading-primary">Maintenance tracker App</h1>
          <p className="paragraph-primary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            cupiditate corporis deserunt ab? Minima quidem cupiditate officiis
            excepturi{" "}
          </p>
        </div>
      </div>
      <div className="col-1-of-2">
        <Carousel />
      </div>
    </div>
  </div>
);

export default Hero;
