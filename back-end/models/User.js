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
    
  },
  name: {
    type: String,
    
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('user', UserSchema);