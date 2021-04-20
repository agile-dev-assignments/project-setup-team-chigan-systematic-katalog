const mongoose = require('mongoose');

const User = new mongoose.Schema({
  username: String,
  password: String,
  bio: String,
  venmo: String,
  email: String,
  phoneNum: Number, 
});

mongoose.model('User', User);