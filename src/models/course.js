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
    required  : true,
    trim      : true
  },
  description: {
    type      : String,
    required  : true,
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
      required  : true
    },
    description: {
      type      : String,
      required  : true
    }
  }]
});

const Course = mongoose.model('Course', CourseSchema);
module.exports = Course;
