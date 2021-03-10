import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
// Redux
import { useDispatch, useSelector } from 'react-redux'
import {
  createBlog,
  deleteBlog,
  getBlogs,
} from '../../store/actions/blogActions'
import { CREATE_BLOG_RESET } from '../../store/constants/blogConstants'
// My Components
import DetailList from '../../components/DetailList'
import MyButton from '../../components/utils/Button'
import Loader from '../../components/utils/Loader'
import Table from '../../components/utils/Table'
import TBody from '../../components/utils/TBody'
// // Assets
// import classes from './AdminScreen.module.css';

const BlogListContainer = ({ history }) => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const blogCreate = useSelector((state) => state.blogCreate)
  const {
    loading: loadingCreateBlog,
    success: successCreateBlog,
    blog: createdBlog,
  } = blogCreate

  const blogList = useSelector((state) => state.blogList)
  const { loading: loadingBlogs, blogs } = blogList

  const blogDelete = useSelector((state) => state.blogDelete)
  const { loading: loadingDelete, success: successDelete } = blogDelete
  useEffect(() => {
    dispatch({ type: CREATE_BLOG_RESET })
    if (!userInfo || !userInfo.isAdmin) {
      if (history) {
        history.push('/login')
      }
    }
    dispatch(getBlogs())
    if (successCreateBlog) {
      history.push(`/admin/blog/${createdBlog._id}/edit`)
    }
  }, [
    history,
    userInfo,
    dispatch,
    successCreateBlog,
    createdBlog,
    successDelete,
  ])

  const createBlogHandler = () => {
    dispatch(createBlog())
  }

  const deleteBlogHandler = (id) => {
    if (window.confirm('Are you sure?')) {
      dispatch(deleteBlog(id))
    }
  }
  return (
    <div>
      <h2>Upload A Blog Post</h2>
      <MyButton
        content='Create a new blog post'
        variant='func'
        to={createBlogHandler}
        outMargin='15px'
        direction='left'
      />
      <MyButton
        content='Go To /Blog'
        to={createBlogHandler}
        outMargin='15px'
        direction='left'
        to='/blog'
      />
      {loadingCreateBlog ? <Loader /> : null}
      {loadingBlogs ? (
        <Loader />
      ) : (
        <div>
          <h2>Existing Blogs</h2>
          <Table fixed>
            <TBody>
              {blogs ? (
                blogs.map((blogElement, index) => (
                  <DetailList
                    key={index}
                    label='Existing Blogs'
                    content={blogElement}
                    editLoc='blog'
                    buttons={[
                      {
                        link: blogElement._id,
                        content: 'Edit',
                      },
                      {
                        variant: 'func',
                        to: () => deleteBlogHandler(blogElement._id),
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

export default withRouter(BlogListContainer)
