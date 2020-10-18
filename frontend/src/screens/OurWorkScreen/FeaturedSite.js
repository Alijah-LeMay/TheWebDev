import React from 'react';
import Radium from 'radium';
import SlickSlider from '../../components/SlickSlider';

const FeaturedSite = ({
  category,
  siteTitle,
  siteLink,
  siteImages,
  showLabel,
  siteDescription,
}) => {
  let rStyle = {
    divMain: {
      display: 'flex',
      flexDirection: 'row',
      padding: '40px',
    },

    imageContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    image: {
      maxWidth: '250px',
    },
    text_container: {
      minWidth: '175px',
      maxWidth: '175px',
    },
    link: {
      textDecoration: 'none',
      color: '#3D5AAF',
      fontSize: '1.3rem',
      wordWrap: 'break-word',
    },
  };
  if (showLabel) {
    rStyle = {
      divMain: {
        display: 'flex',
        flexDirection: 'row',
        padding: '40px',
      },
      imageContainer: {
        display: 'flex',
        alignItems: 'center',
      },
      image: {
        maxWidth: '250px',
      },
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
        fontSize: '1.3rem',
        wordWrap: 'break-word',
      },
    };
  }

  return (
    <div style={rStyle.divMain}>
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
