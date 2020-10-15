const mongoose = require('mongoose');

const SiteSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  siteTitle: { type: String, required: true },
  siteLink: { type: String, required: true },
  siteDescription: { type: String },
  siteImages: { type: Array },
});

module.exports = Site = mongoose.model('Site', SiteSchema);
