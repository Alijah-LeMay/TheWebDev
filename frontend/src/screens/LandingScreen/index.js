import React from 'react';
import classes from './Landing.module.css';

// My Components
import ImageBanner from '../../components/utils/ImageBanner';
import CenterContainer from '../../components/utils/CenterContainer';
import Card from '../../components/utils/Card';
import Loader from '../../components/utils/Loader';
import FormField from '../../components/utils/FormField';

import MyButton from '../../components/utils/Button';
import Meta from '../../components/utils/Meta';
// Assets
import landing_bck from '../../assets/landing_bck.jpg';
import home_analytics from '../../assets/home_analytics.png';
import MyReCaptcha from '../../components/utils/ReCaptcha';

const Landing = () => {
  return (
    <div className={classes.landing_Container}>
      <Meta
        title='Home | The Web Developers'
        description='One Stop Shop for Website, Software, and Mobile Development.'
      />
      <ImageBanner
        imageLOC={landing_bck}
        label='Professional Website Design'
        altText='Home page Banner'
        bgOpacity
        opacity={0.2}
        bgColor='#f2f2f2'
      />
      <CenterContainer>
        <MyReCaptcha />
      </CenterContainer>

      <CenterContainer bgColor='#f2f2f2' bgPadding='25px 0'>
        <div className={classes.landing_featuredContainer}>
          <h1 className={classes.textBanner}>Why Choose Us?</h1>
          <div className={classes.firstCards_container}>
            <Card>
              <i
                className='fas fa-keyboard'
                style={{ fontSize: '4rem', color: '#CEB302' }}
              ></i>
              <h2>Intuitive, Creative, Professional</h2>
              <p>
                You get the best experience when choosing us for your design and
                development
              </p>
            </Card>
            <Card>
              <i
                className='fas fa-shopping-cart'
                style={{ fontSize: '4rem', color: '#3D5AAF' }}
              ></i>
              <h2>One Stop Shop</h2>
              <p>
                Need a website? No problem. Search Engine Optimization? We've
                got you covered. App Development? Yep, that too​
              </p>
            </Card>
            <Card>
              <i
                className='fas fa-dolly'
                style={{ fontSize: '4rem', color: '#4BB781' }}
              ></i>
              <h2>Hard Working</h2>
              <p>
                We strive to provide our customers quick and professional
                support​​
              </p>
            </Card>
          </div>
        </div>
      </CenterContainer>
      <CenterContainer bgPadding='40px 0'>
        <div className={classes.infoSection_container}>
          <div className={classes.card_container}>
            <Card>
              <img src={home_analytics} alt='website analytics' />
            </Card>
          </div>

          <div className={classes.infoSection_right}>
            <h2>Website Development</h2>
            <h3>Intuitive Design</h3>
            <p>
              Desire something special? We create intuitive and stunning
              websites that feature aesthetic designs and clean modern branding.
              For us, every project starts with a goal and gets completed with
              outstanding outcomes.
            </p>
            <h3>Worry Free</h3>
            <p>
              We are your full-service website development partner, and we take
              care of everything when it comes to web design. The Web Developers
              specialize in creating exceptional and outstanding website
              applications for all clients. We understand your demands and
              intend to help you achieve them.
            </p>
            <MyButton content='Learn More' to='/services' />
          </div>
        </div>
      </CenterContainer>
      <CenterContainer bgColor='#f2f2f2' bgPadding='40px 0'>
        <div>
          <h1 className={classes.textBanner}>Additional Services</h1>
          <div className={classes.firstCards_container}>
            <Card variant='outline'>
              <h2>Logo Design</h2>

              <p>
                Take your business a step forward with a website to showcase
                your products and services.
              </p>
            </Card>
            <Card variant='outline'>
              <h2>SEO</h2>
              <p>
                Drive more Organic traffic to your site by increasing your rank
                in search results
              </p>
            </Card>
            <Card variant='outline'>
              <h2>Marketing</h2>
              <p>
                Get noticed by the customers that matter. Start a Marketing
                Campaign today.
              </p>
            </Card>
          </div>
          <MyButton content='Get A Quote' to='/quote' />
        </div>
      </CenterContainer>
    </div>
  );
};

export default Landing;
