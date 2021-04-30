
//mongo "mongodb+srv://cluster0.jw5bn.mongodb.net/myFirstDatabase" --username <username>

const mongoose = require("mongoose");
require('dotenv').config()
const uri = process.env.URI

const connectDB = async () => {
	try {
		await mongoose.connect(process.env.URI.toString(), {
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
