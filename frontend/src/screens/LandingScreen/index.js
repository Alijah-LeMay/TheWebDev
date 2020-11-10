import React, { useState } from 'react';
import axios from 'axios';

import classes from './Landing.module.css';

// My Components
import ImageBanner from '../../components/utils/ImageBanner';
import CenterContainer from '../../components/utils/CenterContainer';
import Card from '../../components/utils/Card';

import MyButton from '../../components/utils/Button';
import Meta from '../../components/utils/Meta';
import FormField from '../../components/utils/FormField';
import Loader from '../../components/utils/Loader';
// Assets
import landing_bck from '../../assets/landing_bck.jpg';
import home_analytics from '../../assets/home_analytics.png';

const Landing = ({ history }) => {
  const [formState, setFormState] = useState({
    name: { value: '' },
    email: { value: '' },
  });
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const formConfig = {
    name: {
      type: 'input',
      config: { type: 'text', placeholder: 'Name' },
    },
    email: {
      type: 'input',
      config: { type: 'email', placeholder: 'Email' },
    },
  };

  // Prepare formState objects
  let formElements = [];
  for (let key in formState) {
    formElements.push({ id: key, setup: formConfig[key] });
  }
  const inputChangedHandler = (event, inputIdentifier) => {
    formElements.forEach((formElement) => {
      if (inputIdentifier === formElement.id) {
        setFormState({
          ...formState,
          [inputIdentifier]: event.target.value,
        });
      }
    });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    setLoadingSubmit(true);

    const { name, email } = formState;
    try {
      await axios.post('/api/send', {
        name,
        email,
        phone: '',
        address: '',
        typeOfBusiness: '',
      });
      console.log('Message Sent');
    } catch (error) {
      console.log('Message failed to send');
    }
    setLoadingSubmit(false);
    history.push('/thankyou');
  };

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
          <h1 className={classes.textBanner}>Get Started</h1>
          <div className={classes.miniform_container}>
            <form onSubmit={submitHandler}>
              {formElements.map((formElement) => (
                <FormField
                  key={formElement.id}
                  type={formElement.setup.type}
                  config={formElement.setup.config}
                  value={formElement.setup.value}
                  changed={(event) =>
                    inputChangedHandler(event, formElement.id)
                  }
                />
              ))}
              {loadingSubmit ? (
                <Loader size='6px' />
              ) : (
                <MyButton
                  content='Submit'
                  variant='submit'
                  styleVariant='clear'
                  hoverColor='#4bb781'
                  fontSize='1.1rem'
                />
              )}
            </form>
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
          <MyButton content='Get A Quote' to='/quote' direction='center' />
        </div>
      </CenterContainer>
    </div>
  );
};

export default Landing;
