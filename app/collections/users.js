var db = require('../config');
var User = require('../models/user');

var Users = new db.Collection();
// example input :      [{username: 'ChrisAvocado', password: '23ujnlknfo298h2893hfjh982'}, {username: 'C', pass.......]
// The collection automatically generates a model for each input object.
Users.model = User;

module.exports = Users;