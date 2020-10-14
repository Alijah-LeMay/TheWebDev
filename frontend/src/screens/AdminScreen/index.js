import React, { useEffect } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { createSite, getSites } from '../../store/actions/siteActions';
// My Components
import ImageBanner from '../../components/utils/ImageBanner';
import CenterContainer from '../../components/utils/CenterContainer';
import MyButton from '../../components/utils/Button';
import DetailList from '../../components/DetailList';

// Assets
import classes from './AdminScreen.module.css';
import landing_bck from '../../assets/landing_bck.jpg';

const AdminScreen = ({ history }) => {
  const dispatch = useDispatch();

  const siteCreate = useSelector((state) => state.siteCreate);
  const { success: successCreate, site: createdSite } = siteCreate;

  const siteList = useSelector((state) => state.siteList);
  const { loading: loadingSites, sites } = siteList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo || !userInfo.isAdmin) {
      history.push('/login');
    }
    dispatch(getSites());
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
          <h2>Upload A Site</h2>

          <MyButton
            content='Create A Site'
            variant='func'
            onClick={createProductHandler}
          />
          <div>
            {loadingSites ? (
              <div>...loading</div>
            ) : (
              sites.map((siteElement, index) => (
                <DetailList
                  key={index}
                  content={siteElement}
                  buttons={[
                    {
                      link: siteElement._id,
                      content: 'Edit',
                    },
                  ]}
                />
              ))
            )}
          </div>
        </div>
      </CenterContainer>
    </div>
  );
};

export default AdminScreen;
