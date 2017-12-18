'use strict';

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  fullName: {
    type      : String,
    required  : [true, 'The username field has to be filled in.'],
    trim      : true
  },
  emailAddress: {
    type      : String,
    unique    : true,
    required  : [true, 'The email address field has to be filled in'],
    trim      : true
  },
  password: {
    type      : String,
    required  : [true, 'The password field has to be filled in']
  }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
