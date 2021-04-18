const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Photocard = new Schema({
  id: Number,
  photocard_name: String,
  group: String,
  member: String,
  album: String,
  picture: { 
    data: Buffer, 
    contentType: String 
  },
  picture2: { 
    data: Buffer, 
    contentType: String 
  }
});

mongoose.model('Photocard', Photocard);