'use strict';

const express = require('express');
const router = express.Router();

const Course = require('../models/course');
const Review = require('../models/review');

// GET /api/courses
  // status: 200
  // goal: returns the course _id and title properties
router.get('/', function(req, res, next) {
  Course
    .find()
    .select('_id, title')
    .exec(function(error, courses) {
      if(error) {
        return next(error);
      } else {
        res
          .status(200)
          .json({
            response: courses
          });
      }
    });
});

// GET /api/courses/:courseId
  // status: 200
  // goal: returns all Course properties and related documents for the provided course ID
  // goal 2:  use Mongoose population to load the related user and reviews documents.
router.get('/:courseId', function(req, res, next) {
  Course
    .findById(req.params.courseId)
    .populate({
      path: 'user',
      model: 'User'
    })
    .exec(function(error, course) {
      if(error) {
        res
          .status(404)
          .json({
            response: 'File not found'
          });
      } else {
        res
          .status(200)
          .json({
            response: course
          });
      }
    })
});

// POST Request to /api/courses
router.post('/', function(req, res) {
  res.json({
    response: 'You sent me a POST request to "courses" endpoint.'
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
