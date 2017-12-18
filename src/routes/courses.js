'use strict';

const express = require('express');
const router = express.Router();

const Course = require('../models/course');
const Review = require('../models/review');

// GET Request to /api/courses
router.get('/', function(req, res) {
  res.json({
    response: 'You sent me a GET request to "courses" endpoint.'
  });
});

// POST Request to /api/courses
router.post('/', function(req, res) {
  res.json({
    response: 'You sent me a POST request to "courses" endpoint.'
  });
});

// GET Request to /api/courses/:courseId
router.get('/:courseId', function(req, res) {
  res.json({
    response: 'You sent me a GET request for a specific course ID: ' + req.params.courseId
  });
});

// PUT Request to /api/courses/:courseId
router.put('/:courseId', function(req, res) {
  res.json({
    response: 'You sent me a PUT request for a specific course ID: ' + req.params.courseId
  });
});

// POST Request to /api/courses/:courseId/reviews
router.post('/:courseId/reviews', function(req, res) {
  res.json({
    response: 'You sent me a POST request for a specific course ID: ' + req.params.courseId + ' in order to add a review to it.'
  });
});



module.exports = router;
