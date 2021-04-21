require("dotenv").config({ silent: true })
const mongoose = require("mongoose");

const uri = process.env.URI

const connectDB = async () => {
	try {
		await mongoose.connect(uri, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true
		});

		console.log('MongoDB Connected...');
	} catch (err) {
		console.error(err.message);
        console.log("There is an error connecting")
		// Exit process with failure
		process.exit(1);
	}
};

module.exports = connectDB;
