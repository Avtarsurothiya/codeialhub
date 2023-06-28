//THis file configures the database connection setup

const mongoose = require('mongoose');

//to provide connection to database
//codial_development is the name of DB instance as development environment 
mongoose.connect('mongodb://localhost/codeial_development');

//creating connection instance
const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error in connecting to DB"));

db.once('open', function(){
    console.log("Connected to Database : MongoDB");
});

//to make this file usable, we need to export the connection
module.exports = db;
