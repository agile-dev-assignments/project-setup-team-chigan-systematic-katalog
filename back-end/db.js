//mongo "mongodb+srv://cluster0.jw5bn.mongodb.net/myFirstDatabase" --username <username>
const uri = "mongodb+srv://user:hlHnISkEhvdfEJDz@cluster0.jw5bn.mongodb.net/katalog?retryWrites=true&w=majority";
const mongoose = require("mongoose");

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
		// Exit process with failure
		process.exit(1);
	}
};

module.exports = connectDB;

