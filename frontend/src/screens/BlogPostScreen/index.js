import React, { Fragment, useEffect } from 'react';

// Assets
import landing_bck from '../../assets/landing_bck.jpg';
import classes from './BlogPostScreen.module.css';

// Redux

import { getBlogDetails } from '../../store/actions/blogActions';
import { useDispatch, useSelector } from 'react-redux';

// My Components
import ImageBanner from '../../components/utils/ImageBanner';
import CenterContainer from '../../components/utils/CenterContainer';
import Loader from '../../components/utils/Loader';

const BlogPostScreen = ({ match }) => {
  const dispatch = useDispatch();

  const blogId = match.params.id;

  const blogDetails = useSelector((state) => state.blogDetails);
  const { loading: loadingDetails, blog } = blogDetails;

  useEffect(() => {
    if (!blog || blog._id !== blogId) {
      dispatch(getBlogDetails(blogId));
    }
  }, [dispatch, blog, blogId]);
  // const regEx = /<.+?>/g;
  // const regEx1 = /<\s*b[^>]*>(.*?)<\s*\/\s*b>/g;
  // const regEx2 = /<b.*class=.test.*[\n]*.*?<\/b>/g;
  // const regEx3 = /<.*?>/g;
  // if (blog.content) {
  //   let currentContent = blog.content;
  //   let noBreaks = currentContent.replace(/(\r\n|\n|\r)/gm, '</br>');
  //   let tags = noBreaks.trim().match(regEx1);
  //   tags.forEach((tag) => {
  //     console.log(tag);
  //     let tagContent = tag.match(regEx3);

  //     console.log(tagContent);
  //   });
  //   console.log(tags);
  // }
  return (
    <Fragment>
      <ImageBanner
        imageLOC={landing_bck}
        label={blog.title}
        altText='Home page Banner'
        bgOpacity
        opacity={0.2}
        bgColor='#f2f2f2'
      />
      <CenterContainer Horizontal justify='left'>
        {loadingDetails ? (
          <Loader />
        ) : (
          <div className={classes.post_container}>
            <p className={classes.blog_content}>{blog.content}</p>
          </div>
        )}
      </CenterContainer>
    </Fragment>
  );
};

export default BlogPostScreen;
