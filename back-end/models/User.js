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
  wishlist: {
    type: Array,
    default: []
  }

});

module.exports = mongoose.model('User', UserSchema); //user