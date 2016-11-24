var mongoose = require('mongoose');
var encrypt = require('mongoose-encryption');
var Schema = mongoose.Schema;

// See http://mongoosejs.com/docs/schematypes.html

// var participantSchema = new mongoose.Schema({
// 	f_name: String,
// 	l_name: String,
// 	_id: String,
// 	password: String,
// 	// name: {type: String, required: true}, // this version requires this field to exist
// 	// name: {type: String, unique: true}, // this version requires this field to be unique in the db
// 	//age: Number,
// 	//tags: [String],
// 	description: {
// 		//age: Number,
// 		birth_date: Date,
// 		gender: String
// 	},
// 	email: {type: String, unique: true},
// 	dateAdded : { type: Date, default: Date.now },
// })

// var newUserSchema = new mongoose.Schema({
// 	name: String,//{type: String, required: true},
// 	email: String,//{type: String, unique: true},
// 	password: String,
// 	description: {
// 		birth_date: Date,
// 		gender: String
// 	},
// 	dateAdded : { type: Date, default: Date.now },
// })


// module.exports = mongoose.model('User', newUserSchema);

// module.exports = mongoose.model('Participant', participantSchema);

