const mongoose = require('mongoose');

const Photocard = new mongoose.Schema({
  id: Number,
  photocard_name: String,
  group: String,
  member: String,
  album: String,
  picture: String,
  picture2: String,
});

module.export = mongoose.model('Photocard', Photocard);