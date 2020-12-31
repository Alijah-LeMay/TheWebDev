const express = require('express')
const router = express.Router()

// Controllers

const { loginUser, registerUser } = require('../controllers/userController')

// Routes

router.route('/').post(registerUser)
router.post('/login', loginUser)

module.exports = router
