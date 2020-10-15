import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { updateSite, getSiteDetails } from '../../store/actions/siteActions';
import { UPDATE_SITE_RESET } from '../../constants/siteConstants';

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

  const [image, setImage] = useState([]);
  const [uploading, setUploading] = useState(false);

  const siteDetails = useSelector((state) => state.siteDetails);
  const { site } = siteDetails;

  const siteUpdate = useSelector((state) => state.siteUpdate);
  const { success: successUpdate } = siteUpdate;

  const [formState, setFormState] = useState({
    category: '',
    siteTitle: '',
    siteLink: '',
    siteDescription: '',
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
    siteDescription: {
      type: 'input',
      config: { type: 'text', placeholder: 'Site Description' },
    },
  };
  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: UPDATE_SITE_RESET });
      history.push('/admin');
    } else {
      if (!site || siteId !== site._id) {
        dispatch(getSiteDetails(siteId));
      } else {
        setFormState({
          category: site.category,
          siteTitle: site.siteTitle,
          siteLink: site.siteLink,
          siteDescription: site.siteDescription,
        });
        setImage(site.siteImages);
      }
    }
  }, [dispatch, history, siteId, successUpdate, site, setFormState]);

  // Prepare formState objects
  const formElements = [];
  for (let key in formState) {
    formElements.push({
      id: key,
      setup: formConfig[key],
      value: formState[key],
    });
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
  const imagesArray = [];
  for (let key in image) {
    imagesArray.push(image[key]);
  }

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

      imagesArray.push(data);
      setImage(imagesArray);
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
        siteDescription: formState.siteDescription,
        siteImages: image,
      })
    );
  };
  const imageDeleteHandler = (id) => {
    const imageIndex = image.indexOf(id);
    image.splice(imageIndex, 1);
    console.log(imageIndex);
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
        <MyButton content='Go Back' to='/admin' dir='left' />
        <h2>Edit Site</h2>
        <form onSubmit={submitHandler}>
          {formElements.map((formElement) => (
            <FormField
              key={formElement.id}
              type={formElement.setup.type}
              config={formElement.setup.config}
              value={formElement.value}
              changed={(event) => inputChangedHandler(event, formElement.id)}
            />
          ))}
          {image.map((item, index) => {
            return (
              <div className={classes.imageBox_container} key={index}>
                <img src={item} style={{ width: '100px' }} alt={item} />
                <MyButton
                  content='del'
                  variant='func'
                  to={() => imageDeleteHandler(item)}
                />
              </div>
            );
          })}
          <input type='file' onChange={uploadFileHandler} name={image} />
          {uploading && <div>...loading...</div>}
          <MyButton content='Submit' variant='submit' />
        </form>
      </CenterContainer>
    </div>
  );
};

export default EditSiteScreen;
