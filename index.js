const express = require('express');
const app = express();
const port = 8000;

app.listen(port, function(err){
    if(err){
        // using interpolation via ` ${ } ` to embed variable with comment
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`New Server is running on port: ${port}`);
});