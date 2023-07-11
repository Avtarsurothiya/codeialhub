const User = require('../models/user');

module.exports.profile = function (req, res) {

    return res.render('profile', {
        title: "Profile Page"

    });
}

module.exports.profilemain = function (req, res) {
    return res.end('<h1>Main User Profile</h1>');
}

//Adding Action : Render Sign Up page
module.exports.signup = function (req, res) {
    return res.render('user_sign_up', {
        title: "Codial! Sign Up"
    })
};

//Render the sign in page
module.exports.signin = function (req, res) {
    return res.render('user_sign_in', {
        title: "Codeial! Sign in"
    })
};

//Get the user data from browser
//Async await method to create user function
module.exports.create =async function (req, res) {
    //todo later
    try {
        if (req.body.password != req.body.confirm_password) {
            console.log('Password does not match');
            return res.redirect('back');
        }
        
        const user = await User.findOne({email: req.body.email});
        if (!user) {
           const user = await User.create(req.body);
           console.log('User Created!');
           return res.redirect('/users/sign-in');
        }else{
            console.log('Error in creating the user for signup');
            return res.redirect('back');
        }
    } catch (err) {
        console.log('Error in creating the user for signup');
        return;
    }


/*Then and Catch method to create a user function
module.exports.create = function (req, res) {
if (req.body.password != req.body.confirm_password) {
            console.log('Password does not match');
            return res.redirect('back');
        }
User.findOne({email: req.body.email},)
        .then((user) => {
            console.log('No Entry error');
            if (!user) {
                User.create(req.body,)
                    .then((user) => {
                        consoloe.log('User Created!')
                        return res.redirect('/users/sign-in');
                    })
                    .catch((err) => {
                        console.log('Error in creating the user for signup');
                        return;
                    });
            } else {
                console.log('Leave out');
                return res.redirect('back');
            }
        })
        .catch((err) => {
            console.log('Error in finding the user for signup');
            return;
        }); }
*/

/* Callback method to create a user function
User.findOne({ email: req.body.email}, function(req,res){
        if(err){ console.log('Error in finding the user for signup'); return }
        if(!user){
            User.create(req.body, function(req,res){
                if(err){ console.log('Error in creating the user for signup'); return }
                return res.redirect('/users/sign-in');
            })
        }else{
            return res.redirect('back');
        }
    }) */
    }
    //Sign in and create the session for the user
    module.exports.createSession = function (req, res) {
        //todo later
    };
    