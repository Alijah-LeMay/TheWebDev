const express = require('express')
require('dotenv').config()

const connectDB = require('./config/db')
const path = require('path')
const { notFound, errorHandler } = require('./middleware/errorMiddleware')
const userRoutes = require('./routes/userRoutes')
const siteRoutes = require('./routes/siteRoutes')
const blogRoutes = require('./routes/blogRoutes')

const app = express()

// Connect Database
connectDB()

// Init Middleware
// No longer body-parser
app.use(express.json({ extended: false }))

//app.get('/', (req, res) => res.send('API Running'));

// Define Routes
app.use('/api/user', userRoutes)
app.use('/api/site', siteRoutes)
app.use('/api/blog', blogRoutes)

app.use('/api/send', require('./routes/sendEmail'))

//
// Image upload route
app.use('/api/upload', require('./routes/upload'))
// Make uploads folder static
const dirname = path.resolve()
app.use('/uploads', express.static(path.join(dirname, '/uploads')))

//
// Make sure middleware is after all other routes
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5001

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
