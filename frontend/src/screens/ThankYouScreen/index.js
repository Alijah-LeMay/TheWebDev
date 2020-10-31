import React from 'react';

// Assets

import classes from './ThankYouScreen.module.css';
import quote_bck from '../../assets/quote_bck.jpg';
// Redux
// import { useDispatch } from 'react-redux';

// My Components

import ImageBanner from '../../components/utils/ImageBanner';
import CenterContainer from '../../components/utils/CenterContainer';
import Card from '../../components/utils/Card';
import MyButton from '../../components/utils/Button';
import Meta from '../../components/utils/Meta';

const ThankYouScreen = () => {
  return (
    <div className={classes.quoteScreen_container}>
      <Meta
        title='Free Quote | The Web Developers'
        description='We have developed software and websites for years, and we would love to convert your project to one of our finished products!'
      />
      <ImageBanner
        imageLOC={quote_bck}
        label='We Will Be In Touch'
        altText='Quote Screen Banner'
        bgOpacity
        opacity={0.5}
        bgColor='fff'
      />
      <CenterContainer bgPadding='30px 0 0 0'>
        <Card radius='0'>
          <div className={classes.block_spacer}>
            <h2>Thank You For Choosing Us!</h2>
          </div>
          <div className={classes.block_spacer}>
            One of our team members will contact you shortly.
          </div>
          <MyButton
            content='Go Home'
            to='/'
            styleVariant='clear'
            hoverColor='#4bb781'
          />
        </Card>
      </CenterContainer>
    </div>
  );
};

export default ThankYouScreen;
