'use strict';

const express = require('express');
const router = express.Router();
const User = require('../models/user');

// GET /api/users
  // status: 200
  // goal: Returns the currently authenticated user
router.get('/', function(req, res, next) {
  User
    .find({})
    .exec(function(error, users) {
      if(error) {
        return next(error);
      } else {
        res.json({
          response: users
        });
      }
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
