'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AuthSchema = new Schema({
    username: {
      type: String,
      required: 'Kindly enter the username'
    },
    password: {
        type: Number,
        required: 'Kindly enter the password'
    }
  });

  module.exports = mongoose.model('Auths', AuthSchema);