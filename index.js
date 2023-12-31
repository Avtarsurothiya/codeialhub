const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;

//To use layout in views
const expresslayouts = require('express-ejs-layouts');

//To use Database connection
const db = require('./config/mongoose');

app.use(express.urlencoded({extended: true}));
app.use(cookieParser({extended: true}));
//We need to use expresslayouts before the routes as routes will use this library
app.use(expresslayouts);

//Using express router for all routes
app.use('/', require('./routes'));

//Informing Index where to look for static files
app.use(express.static('./assets'));

//extract style and script tags from partial pages and put at its  proper places in layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true); 

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