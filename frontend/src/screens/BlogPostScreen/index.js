import React, { useState, useEffect } from 'react'
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
import MyButton from '../../components/utils/Button'

const BlogPostScreen = (props) => {
  const { match } = props
  const dispatch = useDispatch()
  const [isAdministrator, setIsAdministrator] = useState(false)

  const blogId = match.params.id
  const blogDetails = useSelector((state) => state.blogDetails)
  const { blog } = blogDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (!blog || blog._id !== blogId) {
      dispatch(getBlogDetails(blogId))
    }
    if (userInfo && userInfo.isAdmin) {
      setIsAdministrator(true)
    }
  }, [dispatch, blog, blogId])

  return (
    <>
      <ImageBanner
        imageLOC={landing_bck}
        label={blog ? blog.title : 'Loading..'}
        altText='Home page Banner'
        bgOpacity
        opacity={0.2}
        bgColor='#f2f2f2'
      />
      <CenterContainer Horizontal justify='left'>
        {blog ? (
          <>
            {isAdministrator && (
              <MyButton
                content='Edit '
                outMargin='15px'
                direction='left'
                to={`/admin/blog/${blog._id}/edit`}
              />
            )}
            <div className={classes.post_container}>
              <ReactMarkdown source={blog.content} />
            </div>
          </>
        ) : (
          <Loader />
        )}
      </CenterContainer>
    </>
  )
}

export default BlogPostScreen
