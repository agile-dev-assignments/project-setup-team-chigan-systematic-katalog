const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PhotoCardSchema = new Schema({
	photocard_name: {
		type: String,
		// required: true,
	},
	group: {
		type: String,
	},
	member: {
		type: String,
	},
	album: {
		type: String,
	},
	picture: {
		type: String,
	},
	picture2: {
		type: String,
	},
});



mongoose.model('Photocard', Photocard);

module.exports = mongoose.model('photoCard', PhotoCardSchema);

