'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserAuthSchema = new Schema({
    id: {
      type: Number,
      required: 'Kindly enter the id'
    },
    username: {
      type: String,
      required: 'Kindly enter the username'
    },
    password: {
        type: Number,
        required: 'Kindly enter the password'
    }
  });

  module.exports = mongoose.model('UserAuths', UserAuthSchema);