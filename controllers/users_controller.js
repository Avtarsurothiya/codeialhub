module.exports.profile = function(req, res){
    return res.end('<h1>User Profile</h1>');
}

module.exports.profilemain = function(req, res){
    return res.end('<h1>Main User Profile</h1>');
}