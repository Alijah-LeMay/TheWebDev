import React from 'react';
// My Components
import ImageBanner from '../../components/utils/ImageBanner';
import CenterContainer from '../../components/utils/CenterContainer';
import Meta from '../../components/utils/Meta';
import MyButton from '../../components/utils/Button';

import landing_bck from '../../assets/landing_bck.jpg';

const PrivacyPolicyScreen = () => {
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
      <CenterContainer bgPadding='10px 0'></CenterContainer>
    </div>
  );
};

export default PrivacyPolicyScreen;
