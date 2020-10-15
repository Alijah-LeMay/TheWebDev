import React from 'react';
import Radium from 'radium';
let rStyle = {
  slider: {
    background: '#fff',
    height: '100px',
    margin: 'auto',
    overflow: 'hidden',
    position: 'relative',
    width: '960px',
    '&::before': {
      '@include': whiteGradient,
      content: '',
      height: '100px',
      position: 'absolute',
      width: '200px',
      zIndex: 2,
      left: 0,
      top: 0,
    },
    '&::after': {
      '@include': whiteGradient,
      content: '',
      height: '100px',
      position: 'absolute',
      width: '200px',
      zIndex: 2,
      right: 0,
      top: 0,
      transform: 'rotateZ(180deg)',
    },
  },
  slide_track: {
    animation: 'scroll $animationSpeed linear infinite',
    display: 'flex',
    width: 'calc(250px * 14)',
  },
  slide: {
    height: '100px',
    width: '250px',
  },
};

const Carrousel = ({ images }) => {
  return (
    <div style={rStyle.slider} class='slider'>
      <div style={rStyle.slide_track} class='slide-track'>
        <div style={rStyle.slide} class='slide'>
          <img
            src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png'
            height='100'
            width='250'
            alt=''
          />
        </div>
        <div style={rStyle.slide} class='slide'>
          <img
            src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png'
            height='100'
            width='250'
            alt=''
          />
        </div>
      </div>
    </div>
  );
};

export default Radium(Carrousel);
