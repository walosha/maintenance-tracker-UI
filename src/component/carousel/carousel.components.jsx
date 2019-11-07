import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import Images from "../../assets/hotel-1.jpg";

import "./carousel.styles.scss";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    adaptiveHeight: true,
    arrows: false
  };

  return (
    <div className="hero__carousel">
      <Slider className="slide-images" {...settings}>
        <div>
          <img className="slide-images" src={Images} alt="" />
        </div>
        <div>
          <img className="slide-images" src={Images} alt="" />
        </div>
        <div>
          <img className="slide-images" src={Images} alt="" />
        </div>
        <div>
          <img className="slide-images" src={Images} alt="" />
        </div>
        <div>
          <img className="slide-images" src={Images} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
