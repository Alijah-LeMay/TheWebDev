import React, { Fragment, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'

// Assets
import landing_bck from '../../assets/landing_bck.jpg'
import classes from './BlogPostScreen.module.css'

// Redux
import { getBlogDetails } from '../../store/actions/blogActions'
import { useDispatch, useSelector } from 'react-redux'

// My Components
import ImageBanner from '../../components/utils/ImageBanner'
import CenterContainer from '../../components/utils/CenterContainer'
import Loader from '../../components/utils/Loader'

const BlogPostScreen = (props) => {
  const { match } = props
  const dispatch = useDispatch()

  const blogId = match.params.id

  const blogDetails = useSelector((state) => state.blogDetails)
  const { loading: loadingDetails, blog } = blogDetails

  useEffect(() => {
    if (!blog || blog._id !== blogId) {
      dispatch(getBlogDetails(blogId))
    }
  }, [dispatch, blog, blogId])

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
            <ReactMarkdown source={blog.content} />
          </div>
        )}
      </CenterContainer>
    </Fragment>
  )
}

export default BlogPostScreen
