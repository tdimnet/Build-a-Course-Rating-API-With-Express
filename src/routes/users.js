'use strict';

const express = require('express');
const router = express.Router();

// GET Request to /api/users
router.get('/', function(req, res) {
  res.json({
    response: 'You sent me a GET request to "users" endpoint.'
  });
});

// POST Request to /api/users
router.post('/', function(req, res) {
  res.json({
    response: 'You sent me a POST request to "users" endpoint.',
    body: req.body
  });
});

// Exporting the router
module.exports = router;
