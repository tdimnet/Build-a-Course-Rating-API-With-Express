'use strict';

const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  // add user relationship
  postedOn: {
    type    : Date,
    default : Date.now
  },
  rating: {
    type: Number,
    required: true,
    min     : 1,
    max     : 5
  },
    review  : String
});

const Review = mongoose.model('Review', ReviewSchema);
module.exports = Review;
