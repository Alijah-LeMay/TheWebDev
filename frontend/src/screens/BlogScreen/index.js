import React, { Fragment, useEffect } from 'react';

// Assets
import blog_page from '../../assets/blog_page.jpg';

// Redux

import { getblogs } from '../../store/actions/blogActions';
import { useDispatch, useSelector } from 'react-redux';

// My Components
import ImageBanner from '../../components/utils/ImageBanner';
import CenterContainer from '../../components/utils/CenterContainer';
import ArticleContainer from '../../components/utils/ArticleContainer';
import Loader from '../../components/utils/Loader';

const BlogScreen = () => {
  const dispatch = useDispatch();

  const blogList = useSelector((state) => state.blogList);
  const { loading: loadingBlogs, blogs } = blogList;

  useEffect(() => {
    dispatch(getblogs());
  }, [dispatch]);
  return (
    <Fragment>
      <ImageBanner
        imageLOC={blog_page}
        label='All Things Digital'
        bgOpacity
        opacity={0.3}
      />
      <CenterContainer Horizontal justify='left'>
        {loadingBlogs ? (
          <Loader />
        ) : (
          blogs.map((articleElement, idx) => (
            <ArticleContainer
              key={idx}
              category={articleElement.category}
              title={articleElement.title}
              imageLOC={articleElement.images[0]}
              description={articleElement.content}
              link={`/blog/${articleElement._id}`}
            />
          ))
        )}
      </CenterContainer>
    </Fragment>
  );
};

export default BlogScreen;
