import React, { useState } from 'react';

// Assets

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

const QuoteScreen = () => {
  // const dispatch = useDispatch();
  const [formState, setFormState] = useState({
    name: { value: '' },
    email: { value: '' },
    phone: { value: '' },
    address: { value: '' },
    typeOfBusiness: { value: '' },
  });
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
  const formElements = [];
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

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className={classes.quoteScreen_container}>
      <ImageBanner
        imageLOC={quote_bck}
        label='Time To Grow'
        altText='Quote Screen Banner'
        bgOpacity
        opacity={0.5}
        bgColor='fff'
      />
      <CenterContainer>
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
              <MyButton
                content='SUBMIT'
                type='submit'
                style={{ margin: '10px 0' }}
                styleVariant='clear'
                hoverColor='#4bb781'
                fontSize='1rem'
              />
            </form>
          </Card>
        </div>
      </CenterContainer>
    </div>
  );
};

export default QuoteScreen;
