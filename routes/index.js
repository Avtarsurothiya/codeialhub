// Once express instance created in entry index.js, same will be passed on if another file requires it in the same project
const express = require('express');

//Calling Router from Exxpress
const router = express.Router();

//requiring homecontroller file 
const homecontroller = require('../controllers/home_controller')

//Checking if router loaded
console.log("Router loaded");

//to access home controller 
router.get( '/', homecontroller.home)

//to access chain route
router.get('/chain', homecontroller.chain);

//when other then / request will come from other controller "users" this will route it to the rquired location
router.use('/users', require('./users'));
router.use('/posts', require('./posts'));


// for anty further routes, access from here
// router.use('/routerName', require('./routerfile));

// Exporting router to be available for indexe.js app entry point
module.exports = router;