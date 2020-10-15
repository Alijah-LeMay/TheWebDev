import React, { useEffect } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import {
  createSite,
  deleteSite,
  getSites,
} from '../../store/actions/siteActions';
// My Components
import ImageBanner from '../../components/utils/ImageBanner';
import CenterContainer from '../../components/utils/CenterContainer';
import MyButton from '../../components/utils/Button';
import DetailList from '../../components/DetailList';
import Table from '../../components/utils/Table';
import Loader from '../../components/utils/Loader';

// Assets
import classes from './AdminScreen.module.css';
import landing_bck from '../../assets/landing_bck.jpg';
import TBody from '../../components/utils/TBody';

const AdminScreen = ({ history }) => {
  const dispatch = useDispatch();

  const siteCreate = useSelector((state) => state.siteCreate);
  const { success: successCreate, site: createdSite } = siteCreate;

  const siteList = useSelector((state) => state.siteList);
  const { loading: loadingSites, sites } = siteList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const siteDelete = useSelector((state) => state.siteDelete);
  const {
    loading: loadingDelete,
    success: successDelete,
    error: errorDelete,
  } = siteDelete;

  useEffect(() => {
    if (!userInfo || !userInfo.isAdmin) {
      history.push('/login');
    }
    dispatch(getSites());
    if (successCreate) {
      history.push(`/admin/site/${createdSite._id}/edit`);
    }
  }, [dispatch, history, userInfo, successCreate, createdSite, successDelete]);

  const createProductHandler = () => {
    dispatch(createSite());
  };

  const deleteSiteHandler = (id) => {
    if (window.confirm('Are you sure?')) {
      dispatch(deleteSite(id));
    }
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
              <Loader />
            ) : (
              <div>
                <h2>Existing sites</h2>
                <Table fixed>
                  <TBody>
                    {sites.map((siteElement, index) => (
                      <DetailList
                        key={index}
                        label='Existing Sites'
                        content={siteElement}
                        buttons={[
                          {
                            link: siteElement._id,
                            content: 'Edit',
                          },
                          {
                            variant: 'func',
                            to: () => deleteSiteHandler(siteElement._id),
                            content: 'Del',
                          },
                        ]}
                      />
                    ))}
                  </TBody>
                </Table>
              </div>
            )}
          </div>
        </div>
      </CenterContainer>
    </div>
  );
};

export default AdminScreen;
