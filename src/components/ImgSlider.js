import React from 'react'
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import styles from "../styles/ImgSlider.module.scss";

//1:16:42 video time

function ImgSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    <Slider className={styles.imgSlider + " home-slider"} {...settings}>
      <div className={styles.sliderWrapper}>
        <img src='/images/slider-badag.jpg' alt='slider-img'></img>
      </div>
      <div className={styles.sliderWrapper}>
        <img src='/images/slider-badging.jpg' alt='slider-img'></img>
      </div>
      <div className={styles.sliderWrapper}>
        <img src='/images/slider-scale.jpg' alt='slider-img'></img>
      </div>
      <div className={styles.sliderWrapper}>
        <img src='/images/slider-scales.jpg' alt='slider-img'></img>
      </div>
    </Slider>
  );
}

export default ImgSlider