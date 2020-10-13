import React, { Fragment, useState } from 'react';
// Assets
import landing_bck from '../../assets/landing_bck.jpg';
// My Components
import ImageBanner from '../../components/utils/ImageBanner';
import CenterContainer from '../../components/utils/CenterContainer';
import FormField from '../../components/utils/FormField';

const LoginScreen = () => {
  const [formState, setFormState] = useState({
    email: { value: '' },
    password: { value: '' },
  });

  const formConfig = {
    email: {
      type: 'input',
      config: { type: 'email', placeholder: 'Your Email' },
    },
    password: {
      type: 'input',
      config: { type: 'text', placeholder: 'Your password' },
    },
  };

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

  return (
    <Fragment>
      <ImageBanner
        imageLOC={landing_bck}
        bgOpacity
        opacity={0.3}
        label='Admin'
      />
      <CenterContainer>
        <form>
          <h2>Administrator Login</h2>
          {formElements.map((formElement) => (
            <FormField
              key={formElement.id}
              type={formElement.setup.type}
              config={formElement.setup.config}
              value={formElement.setup.value}
              changed={(event) => inputChangedHandler(event, formElement.id)}
            />
          ))}
        </form>
      </CenterContainer>
    </Fragment>
  );
};

export default LoginScreen;
