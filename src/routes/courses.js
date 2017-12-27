'use strict';

const express = require('express');
const router = express.Router();

const Course = require('../models/course');
const Review = require('../models/review');

const mid = require('../middleware');

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
    .populate({
      path: 'reviews',
      model: 'Review',
      populate: {
        path: 'user',
        model: 'User'
      }
    })
    .exec(function(error, course) {
      if(error) {
        res
          .status(404)
          .json({
            response: 'File not found',
            error: error
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

// POST /api/courses
  // status: 201
  // goals:
    // Creates a course,
    // sets the Location header
    // returns no content
router.post('/', function(req, res, next) {
  const course = new Course(req.body);
  course.save(function(error) {
    if (error && error.name === 'ValidationError') {
      res
        .status(400)
        .json({
        response: error
      })
    } else if (error) {
      return next(error);
    } else {
      res
        .status(201)
        .location('/')
        .send();
    }
  });
});

// PUT /api/courses/:courseId
  // status: 204
  // goals:
    // Updates a course
    // Returns no content
router.put('/:courseId', function(req, res, next) {
  if(req.body.title && req.body.description) {
    const updateCourse = {
      title         : req.body.title,
      description   : req.body.description
    };

    let course = new Course(req.body);
    Course.update(
      { _id: course._id },
      course,
      function(error) {
        if (error && error.name === 'ValidationError') {
          res
            .status(400)
            .json({
            response: error
          })
        } else if (error) {
          return next(error);
        } else {
          res
            .status(204)
            .send();
        }
      }
    )
  }
});

// POST /api/courses/:courseId/reviews
  // status: 201
  // goals:
    // Creates a review for the specified course ID
    // Sets the Location header to the related course
    // Returns no content
router.post('/:courseId/reviews', function(req, res, next) {
  if (req.body.rating) {
    const newReview = {
      user: req.body.user || null,
      rating: req.body.rating,
      review: req.body.review || null
    };

    Review.create(newReview, function(error, review) {
      if (error) {
        return next(error);
      } else {
        res
          .status(201)
          .json({
            response: newReview
          })
      }
    });

  } else {
    res
      .status(403)
      .json({
        error: 'All fields are required'
      })
  }
});



module.exports = router;
