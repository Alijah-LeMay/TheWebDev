const express = require('express')
const router = express.Router()

// Middleware

const { protect, admin } = require('../middleware/authMiddleware')

// Controllers
const {
  getAllCourses,
  getCourseById,
  deleteCourse,
  createCourse,
  updateCourse,
} = require('../controllers/courseController')

// Routes
router.route('/').get(getAllCourses).post(protect, admin, createCourse)

router
  .route('/:id')
  .put(protect, admin, updateCourse)
  .get(getCourseById)
  .delete(protect, admin, deleteCourse)

module.exports = router
