'use strict';

const express = require('express');
const router = express.Router();
const User = require('../models/user');

// GET /api/users
  // status: 200
  // goal: returns the currently authenticated user
router.get('/:userId', function(req, res, next) {
  User
    .findById(req.params.userId)
    .exec(function(error, user) {
      if(error) {
        res.status = 400;
        res.json({
          response: 'There is no user for this id'
        });
      } else {
        res.status = 200;
        res.json({
          response: user
        });
      }
    });

});

// POST /api/users
  // status: 201
  // goal: Creates a user, sets the Location header to "/", and returns no content
router.post('/', function(req, res) {
  res.json({
    response: 'You sent me a POST request to "users" endpoint.',
    body: req.body
  });
});

// Exporting the router
module.exports = router;
