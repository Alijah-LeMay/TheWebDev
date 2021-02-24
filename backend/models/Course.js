const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    files: {
      type: Array,
      required: true,
    },
    videos: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
)

module.exports = Course = mongoose.model('Course', courseSchema)
