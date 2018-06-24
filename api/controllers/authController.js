'use strict';

var mongoose = require('mongoose'),
  UserAuth = mongoose.model('UserAuths');

  exports.list_all_users = function(req, res) {
    UserAuth.find({}, function(err, user) {
      if (err)
        res.send(err);
      res.json(user);
    });
  };
