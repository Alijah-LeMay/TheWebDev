import React, { useEffect } from 'react'

// Assets
import blog_page from '../../assets/blog_page.jpg'

// Redux

import { getBlogs } from '../../store/actions/blogActions'
import { useDispatch, useSelector } from 'react-redux'

// My Components
import ImageBanner from '../../components/utils/ImageBanner'
import CenterContainer from '../../components/utils/CenterContainer'
import ArticleContainer from '../../components/utils/ArticleContainer'
import Loader from '../../components/utils/Loader'
import classes from './BlogScreen.module.css'

const BlogScreen = () => {
  const dispatch = useDispatch()

  const blogList = useSelector((state) => state.blogList)
  const { blogs } = blogList

  useEffect(() => {
    dispatch(getBlogs())
  }, [dispatch])
  return (
    <div className={classes.screen_container}>
      <ImageBanner
        imageLOC={blog_page}
        label='All Things Digital'
        bgOpacity
        opacity={0.3}
      />
      <CenterContainer Horizontal justify='left'>
        {blogs ? (
          blogs.map((articleElement, idx) => (
            <ArticleContainer
              key={idx}
              category={articleElement.category}
              title={articleElement.title}
              imageLOC={articleElement.images[0]}
              description={articleElement.description}
              link={`/blog/${articleElement._id}`}
            />
          ))
        ) : (
          <Loader />
        )}
      </CenterContainer>
    </div>
  )
}

export default BlogScreen
