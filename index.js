const express = require('express');
const app = express();
const port = 8000;

//To use layout in views
const expresslayouts = require('express-ejs-layouts');

//need to use before the routes because routes will use this library
app.use(expresslayouts);
//Using express router for all routes
app.use('/', require('./routes'));

//Setting up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port, function(err){
    if(err){
        // using interpolation via ` ${ } ` to embed variable with comment
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`New Server is running on port: ${port}`);
});