// var express = require('express');
// var router = express.Router();
// var mongoose = require('mongoose');
// //var encrypt = require('mongoose-encryption');

// // our db model
// //var Participant = require("../models/model.js");
// var User = require("../models/user.js");

// // simple route to render am HTML form that can POST data to our server
// // NOTE that this is not a standard API route, and is really for testing
// router.get('/users/register', function(req,res){
//   res.render('register')
// })

// // simple route to render an HTML page that pulls data from our server and displays it on a page
// // NOTE that this is not a standard API route, and is really for testing
// router.get('/users/login', function(req,res){
//   res.render('login')
// })



// router.post('/users/register', function(req, res){
    
//     var name = req.body.name;
//     var email = req.body.email;
//     var password = req.body.password;
//     var password2 = req.body.password2;
//     var birth_date = req.body.birth_date;
//     var gender = req.body.gender;

//     req.checkBody('name', 'Name is required').notEmpty();

//     var errors = req.validationErrors();


//     if(errors){
//       console.log("yes there are errors here!")
//     }else{
//       console.log("all good here!")
//     }



//     // hold all this data in an object
//     // this object should be structured the same way as your db model
//     var newUserObj = {
//       name:name,
//       email: email,
//       password : password,
//       description: {
//         birth_date: birth_date,
//         gender: gender
//       }
//     };


//     // create a new user model instance, passing in the object
//     var newUser = new User(newUserObj);

//     // now, save that animal instance to the database
//     // mongoose method, see http://mongoosejs.com/docs/api.html#model_Model-save    
//     newUser.save(function(err,data){
//       // if err saving, respond back with error
//       if (err){
//         var error = {status:'ERROR', message: 'Error saving new user', info: err};
//         return res.json(error);
//       }

//       // console.log('saved a new partisipant!');
//       // console.log(data);

//       // now return the json data of the new partisipant
//       var jsonData = {
//         status: 'OK',
//         partisipant: data
//       }

//       return res.json(jsonData);

//     })  
// });



// router.get('/api/delete/:id', function(req, res){

//   var requestedId = req.params.id;

//   // Mongoose method to remove, http://mongoosejs.com/docs/api.html#model_Model.findByIdAndRemove
//   Participant.findByIdAndRemove(requestedId,function(err, data){
//     if(err || data == null){
//       var error = {status:'ERROR', message: 'Could not find that animal to delete'};
//       return res.json(error);
//     }

//     // otherwise, respond back with success
//     var jsonData = {
//       status: 'OK',
//       message: 'Successfully deleted id ' + requestedId
//     }

//     res.json(jsonData);

//   })

// })

// module.exports = router;