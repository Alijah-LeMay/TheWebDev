import React from 'react';
// My Components
import ImageBanner from '../../components/utils/ImageBanner';
import CenterContainer from '../../components/utils/CenterContainer';
import Meta from '../../components/utils/Meta';
import MyButton from '../../components/utils/Button';

import landing_bck from '../../assets/landing_bck.jpg';

const NotFoundScreen1 = () => {
  return (
    <div>
      <Meta
        title='The Web Developers'
        description='One Stop Shop for Website, Software, and Mobile Development.'
      />
      <ImageBanner
        imageLOC={landing_bck}
        label='Not Found'
        altText='Home page Banner'
        bgOpacity
        opacity={0.2}
        bgColor='#f2f2f2'
      />
      <CenterContainer bgPadding='60px 0'>
        <i
          className='fas fa-surprise'
          style={{ fontSize: '10rem', padding: '0 0 50px 0' }}
        ></i>
        <h1 style={{ padding: '0 0 20px 0' }}>
          Oh no! This page doesn't exist.
        </h1>
        <MyButton content='Go Home' to='/' />
      </CenterContainer>
    </div>
  );
};

export default NotFoundScreen1;
