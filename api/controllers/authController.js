'use strict';
var mongoose = require('mongoose');
var  Users = mongoose.model('User');

exports.list_all_users = function(req, res) {
    Users.find({}, function(err, user) {
      if (err)
        res.send(err);
      res.json(user);
    });
  };

  exports.create_an_user = function(req, res) {
    var new_user = new User(req.body);
    new_user.save(function(err, user) {
      if (err)
        res.send(err);
      res.json(user);
    });
  };
  
  exports.read_an_user = function(req, res) {
    Users.findById(req.params.userId, function(err, user) {
      if (err)
        res.send(err);
      res.json(user);
    });
  };
  
  
  exports.update_an_user = function(req, res) {
    Users.findOneAndUpdate({_id: req.params.userId}, req.body, {new: true}, function(err, user) {
      if (err)
        res.send(err);
      res.json(user);
    });
  };
  
  exports.delete_an_user = function(req, res) {
  
    Users.remove({
      _id: req.params.id
    }, function(err, user) {
      if (err)
        res.send(err);
      res.json({ message: 'Task successfully deleted' });
    });
  };