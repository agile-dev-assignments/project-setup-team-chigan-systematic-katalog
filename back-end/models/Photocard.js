const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Photocard = new Schema({
  id: Number,
  photocard_name: String,
  group: String,
  member: String,
  album: String,
  picture: String,
  picture2: String,
});


mongoose.model('Photocard', Photocard);