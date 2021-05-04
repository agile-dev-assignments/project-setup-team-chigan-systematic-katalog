
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
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
  },
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

UserSchema.pre(
  'save',
  async function(next) {
    const user = this;
    const hash = await bcrypt.hash(this.password, 10);

    this.password = hash;
    next();
  }
);

UserSchema.methods.isValidPassword = async function(password) {
  const user = this;
  const compare = await bcrypt.compare(password, user.password);

  return compare;
}

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema); //user
