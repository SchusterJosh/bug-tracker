const express = require('express');
const auth = require('../middleware/auth');
const membership = require('../middleware/membership');
const router = express.Router();

const Project = require('../models/Project');

// @route    GET api/projects
// @desc     Get all of the projects assigned to an organization
// @access   Private
router.post('/', auth, membership, (req, res) => {
  console.log(req.user);
  res.status(200).send('ok');
});

module.exports = router;
