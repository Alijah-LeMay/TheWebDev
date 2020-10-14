const asyncHandler = require('express-async-handler');
// Models

const Site = require('../models/Site');

// desc         Get all sets of our work
// @route       GET /api/ourwork
// @access      Public

const getSites = asyncHandler(async (req, res) => {
  const sites = await Site.find();
  res.json(sites);
});

// desc         Fetch single site
// @route       GET /api/ourwork/:id
// @access      Private / Admin

const getSiteById = asyncHandler(async (req, res) => {
  const site = await Site.findById(req.params.id);
  if (site) {
    res.json(site);
  } else {
    res.status(404);
    throw new Error('Site not found');
  }
});

// desc         Create site entry
// @route       POST /api/ourwork
// @access      Private / Admin
const createSite = asyncHandler(async (req, res) => {
  const site = new Site({
    category: 'Sample Category',
    siteTitle: 'Sample Title',
    siteLink: 'Sample Link',
    siteImages: ['/images/sample.jpg'],
  });

  const createdSite = await site.save();
  res.status(201).json(createdSite);
});

// desc         Update Site Entry
// @route       PUT /api/ourwork/:id
// @access      Private / Admin
const updateSite = asyncHandler(async (req, res) => {
  const { category, siteTitle, siteLink, siteImages } = req.body;
  console.log(req.body);
  const site = await Site.findById(req.params.id);

  if (site) {
    site.category = category ? category : site.category;
    site.siteTitle = siteTitle ? siteTitle : site.siteTitle;
    site.siteLink = siteLink ? siteLink : site.siteLink;
    site.siteImages = siteImages ? siteImages : site.siteImages;
    const updatedSite = await site.save();
    res.json(updatedSite);
  } else {
    res.status(404);
    throw new Error('Site not found');
  }
});

module.exports = { getSites, createSite, updateSite, getSiteById };
