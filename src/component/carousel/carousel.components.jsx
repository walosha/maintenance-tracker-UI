import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Images from "../../assets/hotel-1.jpg";

import "./carousel.styles.scss";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  return (
    <div className="hero__carousel">
      <Slider {...settings}>
        <div>
          <img src={Images} alt="" />
        </div>
        <div>
          <img src={Images} alt="" />
        </div>
        <div>
          <img src={Images} alt="" />
        </div>
        <div>
          <img src={Images} alt="" />
        </div>
        <div>
          <img src={Images} alt="" />
        </div>
        <div>
          <img src={Images} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
