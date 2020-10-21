const asyncHandler = require('express-async-handler');
// Models

const Site = require('../models/Site');

// desc         Get all sets of our work
// @route       GET /api/site
// @access      Public

const getSites = asyncHandler(async (req, res) => {
  const sites = await Site.find();
  sites.sort((a, b) => (a.category > b.category ? 1 : -1));
  res.json(sites);
});

// desc         Fetch single site
// @route       GET /api/site/:id
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

// desc         Delete single site
// @route       DELETE /api/site/:id
// @access      Private / Admin

const deleteSite = asyncHandler(async (req, res) => {
  const site = await Site.findById(req.params.id);
  if (site) {
    await site.remove();
    res.json({ message: 'Site Removed' });
  } else {
    res.status(404);
    throw new Error('Site not found');
  }
});

// desc         Create site entry
// @route       POST /api/site
// @access      Private / Admin
const createSite = asyncHandler(async (req, res) => {
  const site = new Site({
    category: 'Sample Category',
    siteTitle: 'Sample Title',
    siteLink: 'Sample Link',
    siteDescription: 'Sample Description',
    siteImages: ['/images/sample.jpg'],
  });

  const createdSite = await site.save();
  res.status(201).json(createdSite);
});

// desc         Update Site Entry
// @route       PUT /api/site/:id
// @access      Private / Admin
const updateSite = asyncHandler(async (req, res) => {
  const {
    category,
    siteTitle,
    siteLink,
    siteImages,
    siteDescription,
  } = req.body;
  console.log(req.body);
  const site = await Site.findById(req.params.id);

  if (site) {
    site.category = category ? category : site.category;
    site.siteTitle = siteTitle ? siteTitle : site.siteTitle;
    site.siteLink = siteLink ? siteLink : site.siteLink;
    site.siteDescription = siteDescription
      ? siteDescription
      : site.siteDescription;
    site.siteImages = siteImages ? siteImages : site.siteImages;
    const updatedSite = await site.save();
    res.json(updatedSite);
  } else {
    res.status(404);
    throw new Error('Site not found');
  }
});

module.exports = { getSites, createSite, updateSite, getSiteById, deleteSite };
