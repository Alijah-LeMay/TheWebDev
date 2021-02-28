import React, { useState, useEffect } from 'react'
import axios from 'axios'

// Redux
import { useDispatch, useSelector } from 'react-redux'

// My Components
import ImageBanner from '../../components/utils/ImageBanner'
import CenterContainer from '../../components/utils/CenterContainer'
import MyButton from '../../components/utils/Button'
import FormField from '../../components/utils/FormField'

// Assets
import classes from './EditCourseScreen.module.css'
import landing_bck from '../../assets/landing_bck.jpg'
import { UPDATE_COURSE_RESET } from '../../store/constants/courseConstants'
import {
  getCourseDetails,
  updateCourse,
} from '../../store/actions/courseActions'

const EditCourseScreen = (props) => {
  const { match, history } = props
  const courseId = match.params.id
  const dispatch = useDispatch()

  const [image, setImage] = useState([])
  const [uploading, setUploading] = useState(false)

  const courseDetails = useSelector((state) => state.courseDetails)
  const { course } = courseDetails

  const courseUpdate = useSelector((state) => state.courseUpdate)
  const { success: successUpdate } = courseUpdate

  const [formState, setFormState] = useState({
    title: '',
    description: '',
    markDown: '',
    videos: '',
  })
  const formConfig = {
    title: {
      type: 'input',
      config: { type: 'text', placeholder: 'Course Title' },
    },
    description: {
      type: 'input',
      config: { type: 'text', placeholder: 'Course Description' },
    },
    markDown: {
      type: 'input',
      config: { type: 'text', placeholder: 'Course MarkDown' },
    },
    videos: {
      type: 'input',
      config: { type: 'text', placeholder: 'Course Video Links' },
    },
  }
  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: UPDATE_COURSE_RESET })
      history.push('/admin')
    } else {
      if (!course || courseId !== course._id) {
        dispatch(getCourseDetails(courseId))
      } else {
        setFormState({
          title: course.title,
          description: course.description,
          markDown: course.markDown,
          videos: course.videos,
        })

        setImage(course.files)
      }
    }
  }, [dispatch, history, courseId, successUpdate, course])

  // Prepare formState objects
  const formElements = []
  for (let key in formState) {
    formElements.push({
      id: key,
      setup: formConfig[key],
      value: formState[key],
    })
  }

  const inputChangedHandler = (event, inputIdentifier) => {
    formElements.forEach((formElement) => {
      if (inputIdentifier === formElement.id) {
        setFormState({
          ...formState,
          [inputIdentifier]: event.target.value,
        })
      }
    })
  }
  const imagesArray = []
  for (let key in image) {
    imagesArray.push(image[key])
  }

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('image', file)
    setUploading(true)
    try {
      const config = {
        headers: { 'Content-Type': 'multipart/form-data' },
      }

      const { data } = await axios.post('/api/upload', formData, config)

      imagesArray.push(data)
      setImage(imagesArray)
      setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      updateCourse({
        _id: courseId,
        title: formState.title,
        description: formState.description,
        markDown: formState.markDown,
        videos: formState.videos,
        files: image,
      })
    )
  }
  const imageDeleteHandler = (id) => {
    const imageIndex = image.indexOf(id)
    image.splice(imageIndex, 1)
    console.log(imageIndex)
  }

  return (
    <div className={classes.screen_container}>
      <ImageBanner
        imageLOC={landing_bck}
        bgOpacity
        opacity={0.3}
        label='Edit Course'
      />

      <CenterContainer>
        <MyButton content='Go Back' to='/admin' dir='left' />
        <h2>Edit Course</h2>
        <form onSubmit={submitHandler}>
          {formElements.map((formElement) => (
            <FormField
              key={formElement.id}
              type={formElement.setup.type}
              config={formElement.setup.config}
              value={formElement.value}
              changed={(event) => inputChangedHandler(event, formElement.id)}
            />
          ))}
          {image.map((item, index) => (
            <div className={classes.imageBox_container} key={index}>
              <img src={item} style={{ width: '100px' }} alt={item} />
              <MyButton
                content='del'
                variant='func'
                to={() => imageDeleteHandler(item)}
              />
            </div>
          ))}
          <input type='file' onChange={uploadFileHandler} name={image} />
          {uploading && <div>...loading...</div>}
          <MyButton content='Submit' variant='submit' />
        </form>
      </CenterContainer>
    </div>
  )
}

export default EditCourseScreen
