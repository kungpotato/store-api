'use strict';

var mongoose = require('mongoose'),
  Order = mongoose.model('Orders');

  exports.list_all_orders = function(req, res) {
    Order.find({}, function(err, order) {
      if (err)
        res.send(err);
      res.json(order);
    });
  };

  exports.create_an_oder = function(req, res) {
    var new_order = new Order(req.body);
    new_order.save(function(err, order) {
      if (err)
        res.send(err);
      res.json(order);
    });
  };
  
  exports.read_an_order = function(req, res) {
    Order.findById(req.params.orderId, function(err, order) {
      if (err)
        res.send(err);
      res.json(order);
    });
  };
  
  
  exports.update_an_order = function(req, res) {
    Order.findOneAndUpdate({_id: req.params.OrderId}, req.body, {new: true}, function(err, order) {
      if (err)
        res.send(err);
      res.json(order);
    });
  };
  
  exports.delete_an_order = function(req, res) {
  
    Order.remove({
      _id: req.params.id
    }, function(err, order) {
      if (err)
        res.send(err);
      res.json({ message: 'Task successfully deleted' });
    });
  };