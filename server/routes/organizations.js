const express = require('express');
const router = express.Router();

const Organization = require('../models/Organization');

// @route    GET api/organizations
// @desc     Get all of the projects assigned to an organization
// @access   Private
router.get('/', (req, res) => {
  res.json({ msg: 'Welcome to the organization route!' });
});

module.exports = router;
