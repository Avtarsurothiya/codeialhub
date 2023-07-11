module.exports.home = function(req, res){
    
    /* To send direct response to webapp and end it 
    return res.end('<h1>Express is up for Codial!</h1>'); */
    console.log(req.cookies);
    /* Altering cookie from server side
    res.cookies('user_id',25); */
    return res.render('home', {
        title: "Home"
    });
}

//creating a route
module.exports.chain = function(req,res){
    return res.end('<h1>Chain page</h1><p>Adding More HTML</p>');
}

//for any other page/action
// module.exports.actionName = function(req, res){}