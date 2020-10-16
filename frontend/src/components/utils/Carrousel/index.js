import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

const Carrousel = ({ images, size }) => {
  return (
    <div
      style={{
        position: 'relative',
        width: '100px',
        overFlow: 'hidden',
        height: '100px',
      }}
    >
      {images.map((image, index) => (
        <CarouselImage
          key={index}
          src={image}
          startingPos={`${100 * index}px`}
        />
      ))}
    </div>
  );
};
const giveKeyValues = () => {
  return ``;
};

const slideAnimation = keyframes`0% {transform: translateX(${(props) =>
  props.startingPos});}
15% {transform: translateX(calc(100px));}
100% {transform: translateX(calc(100px));}`;

const CarouselImage = styled.img`
  height: 100px;
  width: 100px;
  position: absolute;
  top: 0;
  left: ${(props) => props.startingPos};
  background-color: ${(props) => props.color};
  animation-name: ${slideAnimation};
  animation-duration: 8s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

CarouselImage.defaultProps = {
  startingPos: '0',
};
export default Carrousel;
