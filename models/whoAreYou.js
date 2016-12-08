var mongoose = require('mongoose');
var encrypt = require('mongoose-encryption');
var Schema = mongoose.Schema;

var newWhoAreYouSchema = new mongoose.Schema({
	whoAreYou: String,//{type: String, required: true},
	submitter: String,
	dateAdded : { type: Date, default: Date.now },
})


var WhoAreYou = module.exports = mongoose.model('WhoAreYou', newWhoAreYouSchema);

module.exports.addNewWhoAreYou = function(newWhoAreYou, callBack){
	
	newWhoAreYou.save(callBack);
}