'use strict';

const mongoose = require('mongoose');
const User = require('../models/user');

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
  }]
});

const Course = mongoose.model('Course', CourseSchema);
module.exports = Course;
