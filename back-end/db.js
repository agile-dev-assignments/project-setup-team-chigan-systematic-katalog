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

//mongo "mongodb+srv://cluster0.jw5bn.mongodb.net/myFirstDatabase" --username <username>