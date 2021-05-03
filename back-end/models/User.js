
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

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
  }
  //confirm: {
 //   type: String
 // }
  // avatar: {
  //   type: String
  // },
  // date: {
  //   type: Date,
  //   default: Date.now
  // }
  wishlist: {
    type: Array,
    default: []
  }

});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema); //user
