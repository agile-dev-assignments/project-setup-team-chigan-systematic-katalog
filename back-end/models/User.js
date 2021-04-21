const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose')

const User = new mongoose.Schema({
  username: String,
  password: String,
  bio: String,
  venmo: String,
  email: String,
  phoneNum: Number, 
});

// mongoose.model('User', User);

User.plugin(passportLocalMongoose)

module.exports = mongoose.model('User', User)