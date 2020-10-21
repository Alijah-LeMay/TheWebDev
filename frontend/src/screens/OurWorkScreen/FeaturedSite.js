import React from 'react';
import Radium from 'radium';
import SlickSlider from '../../components/SlickSlider';
import classes from './OurWorkScreen.module.css';

const FeaturedSite = ({
  category,
  siteTitle,
  siteLink,
  siteImages,
  showLabel,
  siteDescription,
}) => {
  let rStyle = {
    text_container: {
      minWidth: '175px',
      maxWidth: '175px',
    },
    link: {
      textDecoration: 'none',
      color: '#3D5AAF',
      wordWrap: 'break-word',
    },
  };
  if (showLabel) {
    rStyle = {
      h2: {
        position: 'absolute',
        margin: '-40px 0 0 0',
      },
      text_container: {
        minWidth: '175px',
        maxWidth: '175px',
      },
      link: {
        textDecoration: 'none',
        color: '#3D5AAF',
        wordWrap: 'break-word',
      },
    };
  }

  return (
    <div className={classes.divMain}>
      <div>
        {showLabel ? (
          <h2 style={rStyle.h2}>{category}</h2>
        ) : (
          <div style={rStyle.spacer}></div>
        )}
        <div style={rStyle.text_container}>
          <a style={rStyle.link} href={siteLink}>
            {siteTitle}
          </a>
          <p>{siteDescription}</p>
        </div>
      </div>
      <SlickSlider images={siteImages} height='250' width='250' />
    </div>
  );
};

export default Radium(FeaturedSite);
