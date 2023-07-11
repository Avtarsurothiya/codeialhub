module.exports.profile = function(req, res){

return res.render('profile', {
    title: "Profile Page"

});
}

module.exports.profilemain = function(req, res){
    return res.end('<h1>Main User Profile</h1>');
}

//Adding Action : Render Sign Up page
module.exports.signup = function(req, res){
    return res.render('user_sign_up',{
        title: "Codial! Sign Up"
    })
};

//Render the sign in page
module.exports.signin = function(req,res){
    return res.render('user_sign_in',{
        title: "Codeial! Sign in"
    })
};