import React, { useEffect } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { getSites } from '../../store/actions/siteActions';
// My Components
import ImageBanner from '../../components/utils/ImageBanner';
import CenterContainer from '../../components/utils/CenterContainer';
import Loader from '../../components/utils/Loader';
import FeaturedSite from './FeaturedSite';
import Carrousel from '../../components/utils/Carrousel';

// Assets
import landing_bck from '../../assets/landing_bck.jpg';

const OurWorkScreen = () => {
  const images = [landing_bck, landing_bck, landing_bck];
  const dispatch = useDispatch();

  const siteList = useSelector((state) => state.siteList);
  const { loading, error, sites } = siteList;

  useEffect(() => {
    dispatch(getSites());
  }, [dispatch]);

  let previousCategory;
  let categoryShow;

  return (
    <div>
      <ImageBanner
        imageLOC={landing_bck}
        bgOpacity
        opacity={0.3}
        label='Our Work'
      />
      <CenterContainer>
        <Carrousel images={images} />
        {loading ? (
          <Loader />
        ) : error ? (
          <h3>{error}</h3>
        ) : (
          <div>
            {sites.map((siteElement, index) => {
              if (
                !previousCategory ||
                previousCategory !== siteElement.category
              ) {
                categoryShow = true;
              } else {
                categoryShow = false;
              }
              console.log(previousCategory);

              previousCategory = siteElement.category;
              return (
                <FeaturedSite
                  category={siteElement.category}
                  siteTitle={siteElement.siteTitle}
                  siteLink={siteElement.siteLink}
                  siteImages={siteElement.siteImages}
                  key={index}
                  showLabel={categoryShow}
                  siteDescription={siteElement.siteDescription}
                />
              );
            })}
          </div>
        )}
      </CenterContainer>
    </div>
  );
};

export default OurWorkScreen;
