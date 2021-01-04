import React, { useState, useEffect } from 'react'
import axios from 'axios'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { UPDATE_BLOG_RESET } from '../../constants/blogConstants'
import { getBlogDetails, updateBlog } from '../../store/actions/blogActions'

// My Components
import ImageBanner from '../../components/utils/ImageBanner'
import CenterContainer from '../../components/utils/CenterContainer'
import MyButton from '../../components/utils/Button'
import FormField from '../../components/utils/FormField'

// Assets
import classes from './EditBlogScreen.module.css'
import landing_bck from '../../assets/landing_bck.jpg'

const EditBlogScreen = ({ match, history }) => {
  const blogId = match.params.id
  const dispatch = useDispatch()

  const [image, setImage] = useState([])
  const [uploading, setUploading] = useState(false)

  const blogDetails = useSelector((state) => state.blogDetails)
  const { blog } = blogDetails

  const blogUpdate = useSelector((state) => state.blogUpdate)
  const { success: successUpdate } = blogUpdate

  const [formState, setFormState] = useState({
    title: '',
    category: '',
    content: '',
    description: '',
  })
  const formConfig = {
    title: {
      type: 'input',
      config: { type: 'text', placeholder: 'Blog Title' },
    },
    category: {
      type: 'input',
      config: { type: 'text', placeholder: 'Blog Category' },
    },
    content: {
      type: 'textarea',
      config: { type: 'text', placeholder: 'Blog Content' },
    },
    description: {
      type: 'input',
      config: { type: 'text', placeholder: 'Blog Description' },
    },
  }

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: UPDATE_BLOG_RESET })

      history.push('/admin')
    } else {
      if (!blog || blogId !== blog._id) {
        dispatch(getBlogDetails(blogId))
      } else {
        setFormState({
          title: blog.title,
          category: blog.category,
          content: blog.content,
          description: blog.description,
        })
        setImage(blog.images)
      }
    }
  }, [dispatch, blog, history, blogId, successUpdate])

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
      updateBlog({
        _id: blogId,
        title: formState.title,
        category: formState.category,
        content: formState.content,
        description: formState.description,
        images: image,
      })
    )
  }

  const imageDeleteHandler = (id) => {
    const imageIndex = image.indexOf(id)
    image.splice(imageIndex, 1)
    console.log(imageIndex)
  }
  return (
    <div className={classes.editSiteScreen_container}>
      <ImageBanner
        imageLOC={landing_bck}
        bgOpacity
        opacity={0.3}
        label='Edit Blog'
      />

      <CenterContainer>
        <MyButton content='Go Back' to='/admin' dir='left' />
        <h2>Edit Blog</h2>
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
          {image.map((item, index) => {
            return (
              <div className={classes.imageBox_container} key={index}>
                <img src={item} style={{ width: '100px' }} alt={item} />
                <MyButton
                  content='del'
                  variant='func'
                  to={() => imageDeleteHandler(item)}
                />
              </div>
            )
          })}
          <input type='file' onChange={uploadFileHandler} name={image} />
          {uploading && <div>...loading...</div>}
          <MyButton content='Submit' variant='submit' />
        </form>
      </CenterContainer>
    </div>
  )
}

export default EditBlogScreen
