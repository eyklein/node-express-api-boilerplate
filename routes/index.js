var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var encrypt = require('mongoose-encryption');

// our db model
//var Participant = require("../models/model.js");
var User = require("../models/user.js");


router.get('/register', function(req,res){
  res.render('register')
})

router.get('/login', function(req,res){
  res.render('login')
})


router.get('/', function(req, res) {
  res.render('index');
});

// simple route to show an HTML page


// router.post('/api/create', function(req, res){
    
//     var name = req.body.name;
//     var email = req.body.email;
//     var password = req.body.password;
//     var password2 = req.body.password2;
//     var birth_date = req.body.birth_date;
//     var gender = req.body.gender;



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



// router.get('/api/get/:id', function(req, res){

//   var requestedId = req.params.id;

//   // mongoose method, see http://mongoosejs.com/docs/api.html#model_Model.findById
//   Animal.findById(requestedId, function(err,data){

//     // if err or no user found, respond with error 
//     if(err || data == null){
//       var error = {status:'ERROR', message: 'Could not find that animal'};
//        return res.json(error);
//     }

//     // otherwise respond with JSON data of the animal
//     var jsonData = {
//       status: 'OK',
//       partisipant: data
//     }

//     return res.json(jsonData);
  
//   })
// })



// router.get('/api/get', function(req, res){

//   // mongoose method to find all, see http://mongoosejs.com/docs/api.html#model_Model.find
//   Participant.find(function(err, data){
//     // if err or no animals found, respond with error 
//     if(err || data == null){
//       var error = {status:'ERROR', message: 'Could not find partisipant'};
//       return res.json(error);
//     }

//     // otherwise, respond with the data 

//     var jsonData = {
//       status: 'OK',
//       partisipant: data
//     } 

//     res.json(jsonData);

//   })

// })

// // /**
// //  * GET '/api/search'
// //  * Receives a GET request to search an animal
// //  * @return {Object} JSON
// //  */
// router.get('/api/search_id/:_id', function(req,res){

//   // first use req.query to pull out the search query
//   var searchTerm = req.params._id;

//   console.log(searchTerm);
//   //console.log("we are searching for " + searchTerm);

//   // let's find that partisipant
//   Participant.find({_id: searchTerm}, function(err,data){
//     // if err, respond with error 
//     if(err){
//       var error = {status:'ERROR', message: 'Something went wrong in find ID'};
//       return res.json(error);
//     }

//     //if no partisipants, respond with no animals message
//     if(data==null || data.length==0){
//       var message = {status:'NO RESULTS', message: 'We couldn\'t find any results'};
//       return res.json(message);      
//     }

//     // otherwise, respond with the data 

//     var jsonData = {
//       status: 'OK',
//       parti: data
//     } 

//     res.json(jsonData);        
//   })

// })
// router.get('/api/search_f_name/:f_name', function(req,res){

//   // first use req.query to pull out the search query
//   var searchTerm = req.params.f_name;

//   console.log(searchTerm);
//   //console.log("we are searching for " + searchTerm);

//   // let's find that animal
//   Participant.find({f_name: searchTerm}, function(err,data){
//     // if err, respond with error 
//     if(err){
//       var error = {status:'ERROR', message: 'Something went wrong on find name'};
//       return res.json(error);
//     }

//     //if no partisipants, respond with no animals message
//     if(data==null || data.length==0){
//       var message = {status:'NO RESULTS', message: 'We couldn\'t find any results'};
//       return res.json(message);      
//     }

//     // otherwise, respond with the data 

//     var jsonData = {
//       status: 'OK',
//       parti: data
//     } 

//     res.json(jsonData);        
//   })

// })

// // /**
// //  * POST '/api/update/:id'
// //  * Receives a POST request with data of the animal to update, updates db, responds back
// //  * @param  {String} req.params.id - The animalId to update
// //  * @param  {Object} req. An object containing the different attributes of the Animal
// //  * @return {Object} JSON
// //  */

// router.post('/api/update/:id', function(req, res){

//    var requestedId = req.params.id;

//    var dataToUpdate = {}; // a blank object of data to update

//     // pull out the information from the req.body and add it to the object to update
//     var name, age, weight, color, url; 

//     // we only want to update any field if it actually is contained within the req.body
//     // otherwise, leave it alone.
//     if(req.body.name) {
//       f_name = req.body.f_name;
//       // add to object that holds updated data
//       dataToUpdate['name'] = name;
//     }
//     if(req.body.age) {
//       age = req.body.age;
//       // add to object that holds updated data
//       dataToUpdate['age'] = age;
//     }
//     if(req.body.weight) {
//       weight = req.body.weight;
//       // add to object that holds updated data
//       dataToUpdate['description'] = {};
//       dataToUpdate['description']['weight'] = weight;
//     }
//     if(req.body.color) {
//       color = req.body.color;
//       // add to object that holds updated data
//       if(!dataToUpdate['description']) dataToUpdate['description'] = {};
//       dataToUpdate['description']['color'] = color;
//     }
//     if(req.body.url) {
//       url = req.body.url;
//       // add to object that holds updated data
//       dataToUpdate['url'] = url;
//     }

//     var tags = []; // blank array to hold tags
//     if(req.body.tags){
//       tags = req.body.tags.split(","); // split string into array
//       // add to object that holds updated data
//       dataToUpdate['tags'] = tags;
//     }


//     console.log('the data to update is ' + JSON.stringify(dataToUpdate));

//     // now, update that animal
//     // mongoose method findByIdAndUpdate, see http://mongoosejs.com/docs/api.html#model_Model.findByIdAndUpdate  
//     Animal.findByIdAndUpdate(requestedId, dataToUpdate, function(err,data){
//       // if err saving, respond back with error
//       if (err){
//         var error = {status:'ERROR', message: 'Error updating animal'};
//         return res.json(error);
//       }

//       console.log('updated the animal!');
//       console.log(data);

//       // now return the json data of the new person
//       var jsonData = {
//         status: 'OK',
//         animal: data
//       }

//       return res.json(jsonData);

//     })

// })





router.post('/register', function(req, res){
    
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    var password2 = req.body.password2;
    var birth_date = req.body.birth_date;
    var gender = req.body.gender;





    // hold all this data in an object
    // this object should be structured the same way as your db model
    var newUserObj = {
      name:name,
      email: email,
      password : password,
      description: {
        birth_date: birth_date,
        gender: gender
      }
    };


    req.checkBody('name', 'Name is required').notEmpty();
    req.checkBody('email', 'Email is required').notEmpty();
    req.checkBody('password', 'Password is required').notEmpty();
    req.checkBody('password2', 'Passwords do not match').equals(password);


    var errors = req.validationErrors();


    if(errors){
      console.log('render error!!!!')
      return res.json(errors);
      //res.json(errors);
      //return res.render('register');
    }else{
      console.log("PASSED")
    }


    // create a new user model instance, passing in the object
    var newUser = new User(newUserObj);

    // now, save that animal instance to the database
    // mongoose method, see http://mongoosejs.com/docs/api.html#model_Model-save    
    newUser.save(function(err,data){
      // if err saving, respond back with error
      if (err){
        var error = {status:'ERROR', message: 'Error registering to database', info: err};
        return res.json(error);
      }

      // console.log('saved a new partisipant!');
      // console.log(data);

      // now return the json data of the new partisipant
      var jsonData = {
        status: 'OK',
        partisipant: data
      }

      return res.json(jsonData);

    })  
});

/**
 * GET '/api/delete/:id'
 * Receives a GET request specifying the animal to delete
 * @param  {String} req.params.id - The animalId
 * @return {Object} JSON
 */

router.get('/api/delete/:id', function(req, res){

  var requestedId = req.params.id;

  // Mongoose method to remove, http://mongoosejs.com/docs/api.html#model_Model.findByIdAndRemove
  Participant.findByIdAndRemove(requestedId,function(err, data){
    if(err || data == null){
      var error = {status:'ERROR', message: 'Could not find that animal to delete'};
      return res.json(error);
    }

    // otherwise, respond back with success
    var jsonData = {
      status: 'OK',
      message: 'Successfully deleted id ' + requestedId
    }

    res.json(jsonData);

  })

})

module.exports = router;