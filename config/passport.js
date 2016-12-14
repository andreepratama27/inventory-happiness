const LocalStrategy   = require('passport-local').Strategy;
const User = require('../app/schema/User')



module.exports = function (passport) {
	
	// used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });

    passport.use('local-signup', new LocalStrategy({
	    	usernameField : 'email',
	        passwordField : 'password',
	        passReqToCallback : true
	    }, function(req, email, password, done) {
	    	process.nextTick(function() {
	    		User.findOne({ 'local.email' :  email }, function(err, user) {
		            // if there are any errors, return the error
		            if (err)
		                return done(err);

		            // check to see if theres already a user with that email
		            if (user) {
		                return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
		            } else {

		                // if there is no user with that email
		                // create the user
		                var newUser            = new User();

		                // set the user's local credentials
		                newUser.local.email    = email;
		                newUser.local.password = password;

		                // save the user
		                newUser.save(function(err) {
		                    if (err)
		                        throw err;
		                    return done(null, newUser);
		                });
		            }

		        }); 
	    	})
	    })

    )

    passport.use('local-login', new LocalStrategy({
	    	usernameField : 'email',
	        passwordField : 'password',
	        passReqToCallback : true
	    }, function(req, email, password, done) {
	    	User.findOne({'email': email}, function(err, user) {
	    		console.log(user)
	    		
	    		if (err)
	    			return done(null, false)

	    		if (!user)
	    			return done(null, false)

				return done(null, user);
	    	})
	    })

    )
}