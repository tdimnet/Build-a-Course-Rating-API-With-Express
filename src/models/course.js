'use strict';

const mongoose = require('mongoose');
const User = require('./user');
const Review = require('./review');

const CourseSchema = new mongoose.Schema({
  user: {
    type      : mongoose.Schema.ObjectId,
    ref       : 'User'
  },
  title: {
    type      : String,
    required  : [true, 'A course must have a title.'],
    trim      : true
  },
  description: {
    type      : String,
    required  : [true, 'A course must have a description.'],
    trim      : true
  },
  estimatedTime: {
    type      : String
  },
  materialsNeeded: {
    type      : String
  },
  steps: [{
    stepNumber: Number,
    title: {
      type      : String,
      required  : [true, 'The title of the step is required.']
    },
    description: {
      type      : String,
      required  : [true, 'The description of the step is required.']
    }
  }],
  reviews: [{
    type        : mongoose.Schema.ObjectId,
    ref         : 'Review'
  }]
});

const Course = mongoose.model('Course', CourseSchema);
module.exports = Course;
