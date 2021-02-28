import React, { useEffect } from 'react'
// Assets
// import classes from './CourseScreen.module.css'
import landing_bck from '../../assets/landing_bck.jpg'
// Redux

import { useDispatch, useSelector } from 'react-redux'
import { getCourses } from '../../store/actions/courseActions'

// My Components
import ImageBanner from '../../components/utils/ImageBanner'
import CenterContainer from '../../components/utils/CenterContainer'
import ArticleContainer from '../../components/utils/ArticleContainer'
import Loader from '../../components/utils/Loader'

const CourseScreen = () => {
  const dispatch = useDispatch()

  const courseList = useSelector((state) => state.courseList)
  const { courses } = courseList

  useEffect(() => {
    dispatch(getCourses())
  }, [dispatch])

  return (
    <>
      <ImageBanner
        imageLOC={landing_bck}
        label='All Things Digital'
        bgOpacity
        opacity={0.3}
      />
      <CenterContainer Horizontal justify='left'>
        {courses ? (
          courses.map((articleElement, idx) => (
            <ArticleContainer
              key={idx}
              title={articleElement.title}
              description={articleElement.description}
              imageLOC={articleElement.files[0]}
              link={`/course/${articleElement._id}`}
            />
          ))
        ) : (
          <Loader />
        )}
      </CenterContainer>
    </>
  )

  // <div className={classes.screen_container}>
  //   <div style={{ margin: 100 }}>
  //     <button onClick={() => downloadImage(files)}>Download</button>
  //   </div>
  // </div>
}

export default CourseScreen
