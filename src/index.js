'use strict';

// Import statements
const express     = require('express');
// Set up the express app
const app         = express();
// Import the route endpoints
const users      = require('./routes/users');
const courses      = require('./routes/courses');
// Import body parser and logger
const jsonParser  = require('body-parser').json;
const logger      = require('morgan');


// Set up logger and body parser (for json encode)
app.use(logger('dev'));
app.use(jsonParser());

// Set up the router and the entry point: /questions
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
