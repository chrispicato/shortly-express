var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');
var session = require('express-session');
var Link = require('./link');


var User = db.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
  initialize: function(data) {
    this.on('creating', function(model, attrs, options) {
      
      model.set({
        username: data.username,
        password: data.password,
        salt: data.salt
      });

    });
  },
  
  link: function() {
    return this.hasMany(Link);
  }
});

module.exports = User;