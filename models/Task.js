var bcrypt = require('bcrypt-nodejs');
var crypto = require('crypto');
var mongoose = require('mongoose');

var taskSchema = new mongoose.Schema({
  title: String,
  user_id: String
});

module.exports = mongoose.model('Task', taskSchema);
