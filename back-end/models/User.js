// const mongoose = require('mongoose');

// const UserSchema = new mongoose.Schema({
//   username: String,
//   name: String,
//   bio: String,
//   venmo: String,
//   email: String,
//   phoneNum: Number, 
//   password: String
// });

// //mongoose.model('User', User);

// module.export = mongoose.model('User', UserSchema); 
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose')

const User = new mongoose.Schema({
  username: String,
  password: String,
  confirm: String,
  bio: String,
  venmo: String,
  email: String,
  phoneNum: Number
});

// mongoose.model('User', User);

User.plugin(passportLocalMongoose)

module.exports = mongoose.model('User', User)
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true
  },
  name: {
    type: String
  },
  bio: {
    type: String
  },
  venmo: {
    type: String
  },
  email: {
    type: String,
    unique: true
  },
  phoneNum: {
    type: String //Number??
  },
  password: {
    type: String
  },
  // avatar: {
  //   type: String
  // },
  // date: {
  //   type: Date,
  //   default: Date.now
  // }
});

module.exports = mongoose.model('User', UserSchema); //user
