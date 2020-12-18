const asyncHandler = require('express-async-handler')

// Model
const Blog = require('../models/Blog')

// @desc        Get all blog posts
// @route       GET /api/blog
// @access      Public

const getAllBlogs = asyncHandler(async (req, res) => {
  const blogs = await Blog.find()
  res.json(blogs)
})

// desc         Fetch single blog
// @route       GET /api/blog/:id
// @access      Public

const getBlogById = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id)
  if (blog) {
    res.json(blog)
  } else {
    res.status(404)
    throw new Error('Blog not found')
  }
})

// desc         Delete single blog
// @route       DELETE /api/blog/:id
// @access      Private / Admin

const deleteBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id)
  if (blog) {
    await blog.remove()
    res.json({ message: 'Blog Removed' })
  } else {
    res.status(404)
    throw new Error('Blog not found')
  }
})

// @desc        Create new blog post
// @route       POST /api/blog
// @access      Private / Admin

const createBlog = asyncHandler(async (req, res) => {
  const blog = new Blog({
    images: ['Sample Image'],
    title: 'Sample Title',
    category: 'Sample Category',
    author: req.user._id,
    content: 'Sample Content',
    description: 'Sample Description',
  })
  const createdBlog = await blog.save()
  res.status(201).json(createdBlog)
})
// @desc        Update blog post
// @route       PUT /api/blog/:id
// @access      Private / Admin

const updateBlog = asyncHandler(async (req, res) => {
  const {
    images,
    title,
    category,
    author,
    content,
    published,
    description,
  } = req.body

  const blog = await Blog.findById(req.params.id)

  if (blog) {
    blog.images = images
    blog.title = title
    blog.category = category
    blog.description = description
    blog.author = author ? author : blog.author
    blog.content = content
    blog.published = published ? published : blog.published
  }

  const updatedBlog = await blog.save()
  res.status(201).json(updatedBlog)
})

module.exports = {
  getAllBlogs,
  createBlog,
  updateBlog,
  getBlogById,
  deleteBlog,
}
