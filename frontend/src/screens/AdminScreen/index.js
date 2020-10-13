import React, { Fragment, useState } from 'react';
import axios from 'axios';

// Redix
import { useDispatch } from 'react-redux';
// My Components
import ImageBanner from '../../components/utils/ImageBanner';
import CenterContainer from '../../components/utils/CenterContainer';
import MyButton from '../../components/utils/Button';
import FormField from '../../components/utils/FormField';

// Assets
import classes from './AdminScreen.module.css';
import landing_bck from '../../assets/landing_bck.jpg';

const AdminScreen = () => {
  const dispatch = useDispatch;
  const [formState, setFormState] = useState({
    category: { value: '' },
    siteTitle: { value: '' },
    siteLink: { value: '' },
  });
  const [image, setImage] = useState('');
  const [uploading, setUploading] = useState(false);
  const formConfig = {
    category: {
      type: 'input',
      config: { type: 'text', placeholder: 'Site Category' },
    },
    siteTitle: {
      type: 'input',
      config: { type: 'text', placeholder: 'Site Title' },
    },
    siteLink: {
      type: 'input',
      config: { type: 'text', placeholder: 'Site Link' },
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

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('image', file);
    setUploading(true);
    try {
      const config = {
        headers: { 'Content-Type': 'multipart/form-data' },
      };

      const { data } = await axios.post('/api/upload', formData, config);
      setImage(data);
      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className={classes.adminScreen_container}>
      <ImageBanner
        imageLOC={landing_bck}
        bgOpacity
        opacity={0.3}
        label='Administrator'
      />

      <CenterContainer>
        <div className={classes.siteUpload_container}>
          <MyButton content='Create A Site' />
          <h2>Upload A Site</h2>
          <form onSubmit={submitHandler}>
            {formElements.map((formElement) => (
              <FormField
                key={formElement.id}
                type={formElement.setup.type}
                config={formElement.setup.config}
                value={formElement.setup.value}
                changed={(event) => inputChangedHandler(event, formElement.id)}
              />
            ))}
            <input type='file' onChange={uploadFileHandler} />
            {uploading && <div>...loading...</div>}
            <MyButton content='Submit' variant='submit' />
          </form>
        </div>
      </CenterContainer>
    </div>
  );
};

export default AdminScreen;
