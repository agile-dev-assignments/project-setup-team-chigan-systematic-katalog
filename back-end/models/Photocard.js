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
	groupType: {
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
module.exports = mongoose.model('photoCard', PhotoCardSchema);
