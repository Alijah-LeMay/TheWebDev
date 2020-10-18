import React from 'react';

const Slide = ({ image, height }) => {
  return (
    <div>
      <img src={image} style={{ height: height, width: 'auto' }} />
    </div>
  );
};

export default Slide;
