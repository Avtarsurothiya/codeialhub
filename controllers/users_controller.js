module.exports.profile = function(req, res){

return res.render('profile', {
    title: "Profile Page"

});
}

module.exports.profilemain = function(req, res){
    return res.end('<h1>Main User Profile</h1>');
}