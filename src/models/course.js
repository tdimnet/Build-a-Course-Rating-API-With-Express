const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  // add user relationship
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
