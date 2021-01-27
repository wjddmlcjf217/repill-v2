const router = require('express').Router();
// requiring the model that we created  
let User = require('../models/patient.model');

// 1st end point that handles incoming http GET requests on the "rooturl/users/" path
router.route('/physician').get((req, res) => {
  // mongoose method that gets list of users from mongoDB atlas database
  // .find returns a promise 
  Patient.find()
    // return our patients from database in json format
    .then(users => res.json(users))
    // error handling if we can't return users correctly
    .catch(err => res.status(400).json('Error: ' + err));
});

// 2nd end point handles incoming http POST requests on the "rooturl/patients/add" users path
router.route('/physician/add').post((req, res) => {

  // initializes username in the body
  const username = req.body.username;
  //creates new instace of user using username above
  const newPatient = new Patient({username});

  // the new user is saved to database using .save() 
  newPatient.save()
    // confirmation msg when we add user correctly
    .then(() => res.json('Patient added!'))
    // error handling when we dont add user correctly
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;