'use strict';

// Import statements
const express     = require('express');

// Import the route endpoints
const users       = require('./routes/users');
const courses     = require('./routes/courses');
// Import body parser and logger
const jsonParser  = require('body-parser').json;
const logger      = require('morgan');

// set up the mongodb connection
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/course-rating-api');
const db = mongoose.connection

// handling mongo error
db.on('error', function(err) {
  console.error('connection error', err);
});

db.once('open', function() {
  console.log('db connection successful');
});

// Set up the express app
const app         = express();

// Set up logger and body parser (for json encode)
app.use(logger('dev'));
app.use(jsonParser());

// Set up the router and both entry points
app.use('/api/users', users);
app.use('/api/courses', courses);

// Catching up 404 erros
app.use(function (req, res, next) {
  const err = new Error('Not found!');
  err.status = 404;
  next(err);
});

// Error Handler
app.use(function (err, req, res, next) {
  res.status(err.status  || 500);
  res.json({
    error: {
      message: err.message
    }
  });
});

// Set up the port
const port = process.env.PORT || 5000;

// Running the app
app.listen(port, function () {
  console.log('Magic Happens on port', port);
});
