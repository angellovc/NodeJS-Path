const passport = require('passport');
const LocalStrategy = require('./strategies/localStrategy');
const JwtStrategy = require('./jwtStrategy');
/*
    Passport

    It's a library used to create the back Autentication
    process. It allow us to use Twitter, Facebook, google,
    etc. to access the platform. 

    These different kind of ways to access de app are 
    called strategies

    This file is considered the passport main or entry point.
    Here is where all the differente strategies are attached
    to the backend

*/
passport.use(LocalStrategy);
passport.use(JwtStrategy);

/*
    Linking Passport to the app 

    In the file where the app is declared
    and initialized, we need to add our
    passport to the app to the proyect app 
*/
// I.E: 
// const passport = require('passport')
// app.use(passport.initialize());


/*
    Passport as a middleware

    Since passport is used to autenticate the user
    we need to use it as a middleware, so we import
    it into the login method of out auth router
    indicating the kind of strategy we want to evaluate

    I.E:
        router.post('/login',
            // passport as a middleware
            // 1 arg: the kind of strategy
            // 2 arg: if the server will manage sessions or not. This option is not used in sessionless architechtures I.E: REST
            passport.authenticate('local', {session: false}),
            async (req, res, next) => {...}
        );
*/
module.exports = passport;