import React from 'react';
// Assets / Classes
import landing_bck from '../../assets/landing_bck.jpg';

import quote_info from '../../assets/quote_info.jpg';

import classes from './ServicesScreen.module.css';

// My Components
import ImageBanner from '../../components/utils/ImageBanner';
import CenterContainer from '../../components/utils/CenterContainer';
import MyButton from '../../components/utils/Button';
import Meta from '../../components/utils/Meta';

let mStyle = {
  blueH3: {
    color: '#3d5aaf',
    fontSize: '1.4rem',
  },
  greenH3: {
    color: '#4bb781',
    fontSize: '1.4rem',
  },
  whiteText: {
    color: '#fff',
  },
};

const services = () => {
  return (
    <div className={classes.servicesScreen_container}>
      <Meta
        title='Services | The Web Developers'
        description='We Offer Website Design,  Logo Creation, Software Development, and more.'
      />
      <ImageBanner
        imageLOC={landing_bck}
        label='What We Do'
        altText='What We Do'
        bgOpacity
        opacity={0.3}
        bgColor='#f2f2f2'
      />
      <CenterContainer bgColor='#f2f2f2' bgPadding='40px 0'>
        <div className={classes.section_container}>
          <div className={classes.section_right}>
            <h2>Website Development</h2>
            <h3 style={mStyle.blueH3}>Intuitive Design</h3>
            <p>
              We create intuitive websites that feature clean and modern
              designs. Every project starts with an outline of how we're going
              to achieve the desired outcome, and we stick to that schedule.
            </p>
            <h3 style={mStyle.blueH3}>Worry Free</h3>
            <p>
              We are your full-service website development partner, and we take
              care of everything when it comes to web design. We can get you a
              domain name, build your site, and host it, all in one place.
            </p>
          </div>
        </div>
      </CenterContainer>
      <CenterContainer bgPadding='40px 0'>
        <div className={classes.section_container}>
          <div className={classes.section_right}>
            <h2>Hosting</h2>
            <h3 style={mStyle.greenH3}>Everything you need, right here.</h3>
            <p>
              We can build your website, or app, and we can also host it for
              you. You need three things for a website, the content of the site,
              a domain name, and you need a server to <i>host</i> the content.
            </p>
            <h3 style={mStyle.greenH3}>Less Work On Your Part</h3>
            <p>
              Since we build your product, manage and now also host it, it's a
              lot less for you to think about. You have less people to pay, at
              the end of the day.
            </p>
          </div>
        </div>
      </CenterContainer>
      <CenterContainer bgColor='#f2f2f2' bgPadding='40px 0'>
        <div className={classes.section_container}>
          <div className={classes.section_right}>
            <h2>Logo Creation</h2>
            <h3 style={mStyle.blueH3}>Experienced Designers</h3>
            <p>
              Your brand is unique, your logo should be too. Our team includes
              experienced designers with exceptional skills in graphic design.
              With a good logo, you can make your business stand out among the
              rest.
            </p>
            <h3 style={mStyle.blueH3}>Competitive Pricing</h3>
            <p>
              Our designs come with a competitive price range to suit every
              budget. Working with our talented team of designers means you will
              get the best bang for your buck!
            </p>
          </div>
        </div>
      </CenterContainer>
      <CenterContainer
        bgVariant='image'
        bgImageURL={quote_info}
        bgHeight='100%'
        bgPadding='40px 0'
        bgImageAlt='Get A Web Design Quote'
      >
        <div className={classes.section_container}>
          <div className={classes.section_right}>
            <h3 style={mStyle.greenH3}>Free Estimation</h3>
            <h2 style={mStyle.whiteText}>Request A Quote</h2>

            <p style={mStyle.whiteText}>
              If you seek website services that stand out, we are your go to
              experts.
            </p>
            <p style={mStyle.whiteText}>Get A Free Estimate Today!</p>
          </div>
          <MyButton content='Get A Quote' to='/quote' />
        </div>
      </CenterContainer>
    </div>
  );
};

export default services;
