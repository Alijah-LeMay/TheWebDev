import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { CREATE_COURSE_RESET } from '../../store/constants/courseConstants'
import {
  createCourse,
  deleteCourse,
  getCourses,
} from '../../store/actions/courseActions'

// My Components
import DetailList from '../../components/DetailList'
import MyButton from '../../components/utils/Button'
import Loader from '../../components/utils/Loader'
import Table from '../../components/utils/Table'
import TBody from '../../components/utils/TBody'
const CourseListContainer = ({ history }) => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const courseCreate = useSelector((state) => state.courseCreate)
  const {
    loading: loadingCreateCourse,
    success: successCreateCourse,
    course: createdCourse,
  } = courseCreate

  const courseList = useSelector((state) => state.courseList)
  const { loading: loadingCourses, courses } = courseList

  const courseDelete = useSelector((state) => state.courseDelete)
  const { loading: loadingDelete, success: successDelete } = courseDelete

  useEffect(() => {
    dispatch({ type: CREATE_COURSE_RESET })
    if (!userInfo || !userInfo.isAdmin) {
      if (history) {
        history.push('/login')
      }
    }
    dispatch(getCourses())
    if (successCreateCourse) {
      history.push(`/admin/course/${createdCourse._id}/edit`)
    }
  }, [
    history,
    userInfo,
    dispatch,
    successCreateCourse,
    createdCourse,
    successDelete,
  ])

  const createCourseHandler = () => {
    dispatch(createCourse())
  }

  const deleteCourseHandler = (id) => {
    if (window.confirm('Are you sure?')) {
      dispatch(deleteCourse(id))
    }
  }
  return (
    <div>
      <h2>Upload A Course </h2>
      <MyButton
        content='Create a new course'
        variant='func'
        to={createCourseHandler}
      />
      {loadingCreateCourse ? <Loader /> : null}
      {loadingCourses ? (
        <Loader />
      ) : (
        <div>
          <h2>Existing Courses</h2>
          <Table fixed>
            <TBody>
              {courses ? (
                courses.map((courseElement, index) => (
                  <DetailList
                    key={index}
                    label='Existing Courses'
                    content={courseElement}
                    editLoc='course'
                    buttons={[
                      {
                        link: courseElement._id,
                        content: 'Edit',
                      },
                      {
                        variant: 'func',
                        to: () => deleteCourseHandler(courseElement._id),
                        content: 'Del',
                      },
                    ]}
                  />
                ))
              ) : (
                <Loader />
              )}
            </TBody>
          </Table>
          {loadingDelete ? <Loader /> : null}
        </div>
      )}
    </div>
  )
}

export default withRouter(CourseListContainer)
