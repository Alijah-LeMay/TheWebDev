import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { updateSite } from '../../store/actions/siteActions';
// My Components
import ImageBanner from '../../components/utils/ImageBanner';
import CenterContainer from '../../components/utils/CenterContainer';
import MyButton from '../../components/utils/Button';
import FormField from '../../components/utils/FormField';

// Assets
import classes from './EditSiteScreen.module.css';
import landing_bck from '../../assets/landing_bck.jpg';

const EditSiteScreen = ({ match, history }) => {
  const siteId = match.params.id;
  const dispatch = useDispatch();

  const [image, setImage] = useState('');
  const [uploading, setUploading] = useState(false);

  const siteUpdate = useSelector((state) => state.siteUpdate);
  const { site: updatedSite } = siteUpdate;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const [formState, setFormState] = useState({
    category: { value: '' },
    siteTitle: { value: '' },
    siteLink: { value: '' },
  });
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

  useEffect(() => {}, []);

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
    dispatch(
      updateSite({
        _id: siteId,
        category: formState.category,
        siteTitle: formState.siteTitle,
        siteLink: formState.siteLink,
        siteImages: [image],
      })
    );
  };

  return (
    <div className={classes.editSiteScreen_container}>
      <ImageBanner
        imageLOC={landing_bck}
        bgOpacity
        opacity={0.3}
        label='Edit Site'
      />

      <CenterContainer>
        <h2>Edit Site</h2>
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
      </CenterContainer>
    </div>
  );
};

export default EditSiteScreen;
