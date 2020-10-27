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
      label: {
        margin: '-30px 0 0 0',
        fontSize: '1.5rem',
        maxWidth: '200px',
        minWidth: '200px',
        '@media (max-width:980px)': {
          fontSize: '1.3rem',
          minWidth: 0,
        },
        '@media (max-width:440px)': {
          fontSize: '1.1rem',
        },
      },
      text_container: {
        maxWidth: '175px',
        minWidth: '175px',
        '@media(max-width: 980px)': {
          minWidth: 0,
        },
      },
      link: {
        textDecoration: 'none',
        color: '#3D5AAF',
        wordWrap: 'break-word',
        '@media (max-width:980px)': {
          fontSize: '1.1rem',
        },
        '@media (max-width:440px)': {
          fontSize: '.9rem',
        },
      },
      description: {
        fontsize: '1rem',
        '@media (max-width:440px)': {
          fontSize: '.9rem',
        },
      },
    };
  }

  return (
    <div className={classes.divMain}>
      <div>
        {showLabel ? (
          <h2 style={rStyle.label}>{category}</h2>
        ) : (
          <div style={rStyle.spacer}></div>
        )}
        <div style={rStyle.text_container}>
          <a style={rStyle.link} href={siteLink}>
            {siteTitle}
          </a>
          <p style={rStyle.description}>{siteDescription}</p>
        </div>
      </div>
      <SlickSlider images={siteImages} />
    </div>
  );
};

export default Radium(FeaturedSite);
