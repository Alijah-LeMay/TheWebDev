const mongoose = require('mongoose')

const siteSchema = new mongoose.Schema({
  category: { type: String, required: true },
  siteTitle: { type: String, required: true },
  siteLink: { type: String, required: true },
  siteDescription: { type: String, required: false },
  siteImages: { type: Array, required: false },
})

module.exports = Site = mongoose.model('Site', siteSchema)
