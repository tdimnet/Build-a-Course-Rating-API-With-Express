'use strict';

const express = require('express');
const router = express.Router();

// GET Request to /api/courses
router.get('/', function(req, res) {
  res.json({
    response: 'You sent me a GET request to "courses" endpoint.'
  });
});

// GET Request to /api/courses/:courseId
router.get('/:courseId', function(req, res) {
  res.json({
    response: 'You sent me a GET request for a specific course ID: ' + req.params.courseId,
  });
});

module.exports = router;
