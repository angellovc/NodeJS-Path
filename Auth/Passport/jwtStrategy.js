const { Strategy, ExtractJwt } = require('passport-jwt');

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
}

const JwtStrategy = new Strategy(options, (payload, done) => {
  return done(null, payload);
});

module.exports = JwtStrategy;

/*
    Protecting the Routes

    We use the JWT validation to protect the routes
    accessing the information without being
    authorized, since it is a validation it must be
    treated as a middleware

        router.post('/',
            // middlewares
            ...
            passport.authenticate('jwt', {session: false}),
            ...
            async (req, res, next) => {
                try {
                    ...
                    res.status(201).json(newCategory);
                } catch (error) {
                    next(error);
                }
            }
        );

    In the case above. If passport determines the token was not
    altered, then it will bring the user access to the controller
    to finally get the information
*/