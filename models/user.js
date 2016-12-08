var mongoose = require('mongoose');
var encrypt = require('mongoose-encryption');
var Schema = mongoose.Schema;
var bcrypt=require('bcryptjs');

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


var User = module.exports = mongoose.model('User', newUserSchema);

module.exports.createUser = function(newUser, callBack){
	bcrypt.genSalt(10, function(err, salt) {
	    bcrypt.hash(newUser.password, salt, function(err, hash) {
	        newUser.password=hash;
	        newUser.save(callBack);
	    });
	});
}

module.exports.getUserByEmail = function(email, callBack){
	var query = {email: email};
	User.findOne(query, callBack);
}

module.exports.comparePassword = function(candidatePassword, hash, callBack){
	// console.log("comparePassword !!!!!!")
	// console.log(candidatePassword + " : " + hash)
	bcrypt.compare(candidatePassword, hash, function(err, isMatch){
		if(err) throw err;
		callBack(null, isMatch);
	})
}





// module.exports.getUserById = function(id, callBack){
	
// 	User.FindById(id, callBack);
// }