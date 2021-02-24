const express = require('express')
const router = express.Router()

// Middleware

const { protect, admin } = require('../middleware/authMiddleware')
// Controllers

const {
  getSites,
  createSite,
  deleteSite,
  updateSite,
  getSiteById,
} = require('../controllers/siteController')

// Routes

router.route('/').get(getSites).post(protect, admin, createSite)
router
  .route('/:id')
  .put(protect, admin, updateSite)
  .get(protect, admin, getSiteById)
  .delete(protect, admin, deleteSite)

module.exports = router
