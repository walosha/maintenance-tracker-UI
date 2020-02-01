import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LazyLoad from "react-lazy-load";

import Image1 from "../../assets/hotel-1.jpg";
import Image2 from "../../assets/hotel-2.jpg";
import Image3 from "../../assets/hotel-3.jpg";
import Image4 from "../../assets/brand.jpg";

import "./carousel.styles.scss";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    adaptiveHeight: true,
    arrows: false
  };

  return (
    <LazyLoad height={200} offset={200}>
      <div className="hero__carousel">
        <Slider className="slide-images" {...settings}>
          <LazyLoad>
            <img className="slide-images" src={Image1} alt="hero carousel" />
          </LazyLoad>
          <LazyLoad>
            <img className="slide-images" src={Image2} alt="hero carousel" />
          </LazyLoad>
          <LazyLoad>
            <img className="slide-images" src={Image3} alt="hero carousel" />
          </LazyLoad>
          <LazyLoad>
            <img className="slide-images" src={Image4} alt="hero carousel" />
          </LazyLoad>
        </Slider>
      </div>
    </LazyLoad>
  );
};

export default Carousel;
