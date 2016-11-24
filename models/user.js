var mongoose = require('mongoose');
var encrypt = require('mongoose-encryption');
var Schema = mongoose.Schema;

var newUserSchema = new mongoose.Schema({
	name: String,//{type: String, required: true},
	email: String,//{type: String, unique: true},
	password: String,
	description: {
		birth_date: Date,
		gender: String
	},
	dateAdded : { type: Date, default: Date.now },
})


module.exports = mongoose.model('User', newUserSchema);
