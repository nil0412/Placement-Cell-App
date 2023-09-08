const mongoose = require('mongoose');

const DB = process.env.MONGODB_URI || 'mongodb://localhost:27017/PlacementCell';

mongoose.connect(DB, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error in connecting to MongoDB'));

db.once('open', function () {
	console.log('Connected to Database :: Mongodb : ', DB);
});

module.exports = mongoose;
