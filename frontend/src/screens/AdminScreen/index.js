import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { createSite } from '../../store/actions/siteActions';
import { CREATE_SITE_RESET } from '../../constants/siteConstants';
// My Components
import ImageBanner from '../../components/utils/ImageBanner';
import CenterContainer from '../../components/utils/CenterContainer';
import MyButton from '../../components/utils/Button';
import FormField from '../../components/utils/FormField';

// Assets
import classes from './AdminScreen.module.css';
import landing_bck from '../../assets/landing_bck.jpg';

const AdminScreen = ({ history }) => {
  const dispatch = useDispatch();
  const [formState, setFormState] = useState({
    category: { value: '' },
    siteTitle: { value: '' },
    siteLink: { value: '' },
  });
  const [image, setImage] = useState('');
  const [uploading, setUploading] = useState(false);
  const siteCreate = useSelector((state) => state.siteCreate);
  const {
    loading,
    error,
    success: successCreate,
    site: createdSite,
  } = siteCreate;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
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

  useEffect(() => {
    if (!userInfo || !userInfo.isAdmin) {
      history.push('/login');
    }
    if (successCreate) {
      history.push(`/admin/site/${createdSite._id}/edit`);
    }
  }, [dispatch, history, userInfo, successCreate, createdSite]);

  const createProductHandler = () => {
    dispatch(createSite());
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
          <MyButton
            content='Create A Site'
            variant='func'
            onClick={createProductHandler}
          />
          <h2>Upload A Site</h2>
        </div>
      </CenterContainer>
    </div>
  );
};

export default AdminScreen;
