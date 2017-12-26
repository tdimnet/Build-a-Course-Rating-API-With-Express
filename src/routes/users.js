'use strict';

const express = require('express');
const router = express.Router();
const User = require('../models/user');
const requireAuth = require('../middleware/authentication');

// GET /api/user
  // status: 200
  // goal: returns the currently authenticated user
router.get('/:userId', function(req, res, next) {
  User
    .findById(req.params.userId)
    .exec(function(error, user) {
      if(error) {
        res
          .status(404)
          .json({
            response: 'There is no user for this id'
          });
      } else {
        res
          .status(200)
          .json({
            response: user
          });
      }
    });
});

// POST /api/user
  // status: 201
  // goal: Creates a user, sets the Location header to "/", and returns no content
router.post('/', function(req, res, next) {

  if(req.body.fullName && req.body.emailAddress && req.body.password) {
    const newUser = {
      fullName: req.body.fullName,
      emailAddress: req.body.emailAddress,
      password: req.body.password
    }

    User.create(newUser, function(error, user) {
      if(error) {
        return next(error);
      } else {
        return res
                .status(201)
                .location('/')
                .send();
      }
    });

  } else {
    res
      .status(403)
      .json({
        error: 'All fields are required'
      });
  }
});

// Exporting the router
module.exports = router;
