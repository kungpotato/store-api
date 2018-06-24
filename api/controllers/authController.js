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
