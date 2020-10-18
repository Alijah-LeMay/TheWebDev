import React from 'react';
import Slider from 'react-slick';

import Slide from './Slide';

const SlickSlider = ({
  images,
  height,
  width,
  slidesToShow,
  dots,
  arrows,
  autoplay,
  speed,
  infinite,
  slidesToScroll,
}) => {
  const settings = {
    infinite: infinite ? infinite : true,
    autoplay: autoplay ? autoplay : true,
    speed: speed ? speed : 700,
    slidesToShow: slidesToShow ? slidesToShow : 4,
    dots: dots ? dots : false,
    arrows: arrows ? arrows : false,
    slidesToScroll: slidesToScroll ? slidesToScroll : 1,
  };
  let defaultHeight = height ? `${height}px` : '250px';

  let calculatedWidth = `${width * settings.slidesToShow}px`;

  if (images.length < settings.slidesToShow)
    calculatedWidth = `${width * images.length}px`;

  return (
    <div
      style={{
        height: defaultHeight,
        width: calculatedWidth,
      }}
    >
      <Slider {...settings}>
        {images.map((image, index) => (
          <Slide key={index} image={image} height={defaultHeight} />
        ))}
      </Slider>
    </div>
  );
};

export default SlickSlider;
