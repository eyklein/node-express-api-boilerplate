var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var encrypt = require('mongoose-encryption');


var passport=require('passport');
var LocalStrategy=require('passport-local').Strategy;

// var bodyParser = require( 'body-parser' );
// app.use( bodyParser.urlencoded({ extended: true }) );


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


//ensure logged in
router.get('/dashboard', ensureAuthenticated, function(req, res) {
  res.render('index');
});

function ensureAuthenticated(req, res, next){
  if(req.isAuthenticated()){
    return next;
  }else{
    req.flash('error_msg', 'You are not logged in. <br> Please login');
    res.redirect('login');
  }
}

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
    req.checkBody({
      'email': {
        notEmpty: true,
        errorMessage: 'Must enter an email',
        optional: {
          options: { checkFalsy: true } // end here if not email no need to return more errors
        },
        isLength: {
          options: [{ min: 2, max: 40 }],
          errorMessage: 'email be between at least 2 chars long' // Error message for the validator, takes precedent over parameter message
        },
        isEmail: {
          errorMessage: 'Invalid Email'
        }
      }
    });
    req.checkBody('password', 'Password is required').notEmpty();
    req.checkBody('password2', 'Passwords must match').equals(password);


    var errors = req.validationErrors();


    if(errors){
      console.log('render error!!!!')
      //return res.json(errors);
      return res.render('register',{
        errors:errors,
        fields:newUserObj
      });
      //res.json(errors);
      //return res.render('register');
    }else{
      console.log("PASSED")
    }


    // create a new user model instance, passing in the object
    var newUser = new User(newUserObj);

    //in the model 
    User.createUser(newUser, function(err,user){
      // req.flash('error_msg', 'Sorry there was an error saving the adminostrator has been contacted');
      // console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!?");
      //return res.redirect('register');
      if(err){throw err;}
      console.log(user)

      //   ,{
      //   errors:errors,
      //   fields:newUserObj
      //});
    });

    req.flash('success_msg', 'You are registered and can now login');
    return res.render('login',{fields:newUserObj});

    //whats the diff between render and redirect!!!!?

    // now, save that animal instance to the database
    // mongoose method, see http://mongoosejs.com/docs/api.html#model_Model-save    
    




    // newUser.save(function(err,data){
    //   // if err saving, respond back with error
    //   if (err){
    //     var error = {status:'ERROR', message: 'Error registering to database', info: err};
    //     return res.json(error);
    //   }

    //   // console.log('saved a new partisipant!');
    //   // console.log(data);

    //   // now return the json data of the new partisipant
    //   var jsonData = {
    //     status: 'OK',
    //     partisipant: data
    //   }

    //   return res.json(jsonData);

    // })  
});

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
  },function(email, password, done) {
    User.getUserByEmail(email,function(err,user){
      if(err) throw err;
      if(!user){
        return done(null, false, {message: 'Unknown User'});
      }
      //should remove this by findOne instead of find
      User.comparePassword(password, user.password, function(err, isMatch){
        if(err) throw err;
        if(isMatch){
          return done(null, user);
        }else{
          return done(null, false, {message: 'Invalid Password'});
        }
      })
    });
  }
));




passport.serializeUser(function(user, done) {
  done(null, user.email);
});

passport.deserializeUser(function(id, done) {
  User.getUserByEmail(id, function(err, user) {
    done(err, user);
  });
});

router.post('/login',
  passport.authenticate('local', {successRedirect:'/', failureRedirect:'login', failureFlash:true}),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.

    console.log("444444?");
    res.redirect('/');
  });

// router.post('/login', function(req, res){
    
//     var email = req.body.email;
//     var password = req.body.password;
    




//     // hold all this data in an object
//     // this object should be structured the same way as your db model
//     var logInCredentials = {
//       email: email,
//       password : password,
//     };


//     req.checkBody('email', 'Email is required').notEmpty();
//     req.checkBody('password', 'Password is required').notEmpty();
    


//     var errors = req.validationErrors();


//     if(errors){
//       console.log('render error!!!!')
//       //return res.json(errors);
//       return res.render('login',{
//         errors:errors,
//         fields:logInCredentials
//       });
//       //res.json(errors);
//       //return res.render('register');
//     }else{
//       console.log("PASSED")
//     }


//     // create a new user model instance, passing in the object
//     // var newUser = new User(newUserObj);

//     // now, save that animal instance to the database
//     // mongoose method, see http://mongoosejs.com/docs/api.html#model_Model-save    
    



//     newUser.save(function(err,data){
//       // if err saving, respond back with error
//       if (err){
//         var error = {status:'ERROR', message: 'Error registering to database', info: err};
//         //return res.json(error);
//         req.flash('error_msg', 'Sorry');
//         res.redirect('login');
//       }

//       // console.log('saved a new partisipant!');
//       // console.log(data);

//       // now return the json data of the new partisipant
//       var jsonData = {
//         status: 'OK',
//         partisipant: data
//       }

//       req.flash('success_msg', 'Thank you');
//       res.redirect('login');

//       //return res.json(jsonData);

//     })  
// });

/**
 * GET '/api/delete/:id'
 * Receives a GET request specifying the animal to delete
 * @param  {String} req.params.id - The animalId
 * @return {Object} JSON
 */

router.get('/logout', function(req, res){
  req.logout();

  req.flash('success_msg', 'You are logged out.');
  res.redirect('login');
});

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