const asyncHandler = require('express-async-handler')

// Model
const Course = require('../models/Course')

// @desc        Get all courses
// @route       GET /api/course
// @access      Public
const getAllCourses = asyncHandler(async (req, res) => {
  const courses = await Course.find()
  res.json(courses)
})

// desc         Fetch single course
// @route       GET /api/course/:id
// @access      Public

const getCourseById = asyncHandler(async (req, res) => {
  const course = await Course.findById(req.params.id)
  if (course) {
    res.json(course)
  } else {
    res.status(404)
    throw new Error('Course not found')
  }
})

// desc         Delete single course
// @route       DELETE /api/course/:id
// @access      Private / Admin

const deleteCourse = asyncHandler(async (req, res) => {
  const course = await Course.findById(req.params.id)
  if (course) {
    await course.remove()
    res.json({ message: 'Course Removed' })
  } else {
    res.status(404)
    throw new Error('Course not found')
  }
})

// @desc        Create new course
// @route       POST /api/course
// @access      Private / Admin

const createCourse = asyncHandler(async (req, res) => {
  const course = new Course({
    title: 'Sample Title',
    description: 'Sample Description',
    files: ['Sample Image'],
    videos: ['Sample Video'],
  })
  const createdCourse = await course.save()
  res.status(201).json(createdCourse)
})

// @desc        Update course
// @route       PUT /api/course/:id
// @access      Private / Admin

const updateCourse = asyncHandler(async (req, res) => {
  const { title, description, files, videos } = req.body

  const course = await Course.findById(req.params.id)

  if (course) {
    course.title = title
    course.description = description
    course.files = files
    course.videos = videos
  }

  const updatedCourse = await course.save()
  res.status(201).json(updatedCourse)
})

module.exports = {
  getAllCourses,
  getCourseById,
  deleteCourse,
  createCourse,
  updateCourse,
}
