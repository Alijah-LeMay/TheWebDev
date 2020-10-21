const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema(
  {
    images: { type: Array },
    title: { type: String, required: true },
    category: { type: String, required: true },
    author: { type: String, required: true },
    content: { type: String, required: true },
    published: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = Blog = mongoose.model('Blog', blogSchema);
