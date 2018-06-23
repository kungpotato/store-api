'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderSchema = new Schema({
    id: {
      type: Number,
      required: 'Kindly enter the name of the task'
    },
    vender: {
        type: String
    },
    product: {
        type: String
    },
    pcs: {
        type: Number
    },
    price: {
        type: Number
    },
    total: {
        type: Number
    } // ,
    // Created_date: {
    //  type: Date,
    //  default: Date.now
    // }
  });

  module.exports = mongoose.model('Orders', OrderSchema);