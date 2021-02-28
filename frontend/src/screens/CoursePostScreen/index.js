import React, { useEffect } from 'react'
import ReactMarkdown from 'react-markdown'

// Assets
import landing_bck from '../../assets/landing_bck.jpg'
import classes from './CoursePostScreen.module.css'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { getCourseDetails } from '../../store/actions/courseActions'

// My Components
import ImageBanner from '../../components/utils/ImageBanner'
import CenterContainer from '../../components/utils/CenterContainer'
import Loader from '../../components/utils/Loader'
import MyButton from '../../components/utils/Button'

const CoursePostScreen = (props) => {
  const { match } = props
  const dispatch = useDispatch()

  const courseId = match.params.id

  const courseDetails = useSelector((state) => state.courseDetails)
  const { course } = courseDetails

  const downloadImage = async () => {
    window.open(
      `http://localhost:5001/api/download?files=${course.files}`,
      '_parent'
    )
  }

  useEffect(() => {
    if (!course || course._id !== courseId) {
      dispatch(getCourseDetails(courseId))
      console.log(course)
    }
  }, [dispatch, course, courseId])

  return (
    <>
      <ImageBanner
        imageLOC={landing_bck}
        label={course.title}
        altText='Home page Banner'
        bgOpacity
        opacity={0.2}
        bgColor='#f2f2f2'
      />
      <CenterContainer Horizontal justify='left'>
        {console.log(course.files)}
        {course ? (
          <div className={classes.post_container}>
            <div className={classes.images_container}>
              {course.files && (
                <div>
                  {course.files.map((file, idx) => (
                    <img
                      className={classes.course_image}
                      key={idx}
                      src={file}
                      alt={file}
                    />
                  ))}
                  <MyButton
                    content='Download Files'
                    variant='func'
                    to={() => downloadImage(course.files)}
                  />
                </div>
              )}
            </div>
            <ReactMarkdown source={course.content} />
          </div>
        ) : (
          <Loader />
        )}
      </CenterContainer>
    </>
  )
}

export default CoursePostScreen
