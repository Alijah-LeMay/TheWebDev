import React, { useState } from 'react';
import axios from 'axios';

// Assets
import landing_bck from '../../assets/landing_bck.jpg';

import classes from './QuoteScreen.module.css';
import quote_bck from '../../assets/quote_bck.jpg';
// Redux
// import { useDispatch } from 'react-redux';

// My Components

import ImageBanner from '../../components/utils/ImageBanner';
import CenterContainer from '../../components/utils/CenterContainer';
import Card from '../../components/utils/Card';
import MyButton from '../../components/utils/Button';
import FormField from '../../components/utils/FormField';
import Meta from '../../components/utils/Meta';
import Loader from '../../components/utils/Loader';

const QuoteScreen = ({ history }) => {
  // const dispatch = useDispatch();
  const [formState, setFormState] = useState({
    name: { value: '' },
    email: { value: '' },
    phone: { value: '' },
    address: { value: '' },
    typeOfBusiness: { value: '' },
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
    phone: {
      type: 'input',
      config: { type: 'text', placeholder: 'Phone' },
    },
    address: {
      type: 'input',
      config: { type: 'text', placeholder: 'Address' },
    },
    typeOfBusiness: {
      type: 'input',
      config: { type: 'text', placeholder: 'Type of business' },
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

    const { name, email, phone, address, typeOfBusiness } = formState;
    try {
      await axios.post('/api/send', {
        name,
        email,
        phone,
        address,
        typeOfBusiness,
      });
      console.log('Message Sent');
    } catch (error) {
      console.log('Message failed to send');
    }
    setLoadingSubmit(false);
    history.push('/thankyou');
  };

  return (
    <div className={classes.quoteScreen_container}>
      <Meta
        title='Free Quote | The Web Developers'
        description='We have developed software and websites for years, and we would love to convert your project to one of our finished products!'
      />
      <ImageBanner
        imageLOC={landing_bck}
        label='Hire Us'
        altText='Hire Us'
        bgOpacity
        opacity={0.3}
        bgColor='#f2f2f2'
      />
      <CenterContainer bgPadding='30px 0 0 0'>
        <div className={classes.section_container}>
          <div className={classes.quote_left}>
            <h2 className={classes.label}>Get In Touch </h2>
            <div className={classes.info_container}>
              <div className={classes.icon_container}>
                <i
                  className='fas fa-envelope'
                  style={{ padding: '0 0 0 20px' }}
                ></i>

                <p>info@thewebdev.net</p>
              </div>
              <div className={classes.icon_container}>
                <i
                  className='fas fa-phone'
                  style={{ padding: '0 0 0 20px' }}
                ></i>

                <p>{'(239)-671-7373'}</p>
              </div>
            </div>
          </div>
          <Card align='left'>
            <h2 className={classes.label}>Free Estimation</h2>
            <h1>Request A Quote</h1>
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
                  style={{ margin: '10px 0' }}
                  styleVariant='clear'
                  hoverColor='#4bb781'
                  fontSize='1rem'
                />
              )}
            </form>
          </Card>
        </div>
      </CenterContainer>
    </div>
  );
};

export default QuoteScreen;
