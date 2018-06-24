'use strict';

var mongoose = require('mongoose'),
  Auth = mongoose.model('Auths');

  exports.list_all_users = function(req, res) {
    Auth.find({}, function(err, user) {
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
    Auth.findById(req.params.UserId, function(err, user) {
      if (err)
        res.send(err);
      res.json(user);
    });
  };
  
  
  exports.update_an_user = function(req, res) {
    Auth.findOneAndUpdate({_id: req.params.UserId}, req.body, {new: true}, function(err, user) {
      if (err)
        res.send(err);
      res.json(user);
    });
  };
  
  exports.delete_an_user = function(req, res) {
  
    Auth.remove({
      _id: req.params.id
    }, function(err, user) {
      if (err)
        res.send(err);
      res.json({ message: 'Task successfully deleted' });
    });
  };