const jwt = require('jsonwebtoken');

// The secret is the key that will be used
// to encode and decode the token
// Recommended page to generate keys:
//      https://keygen.io/ 
const secret = process.env.JWT_SECRET;
/*
    Authorization Vs Autentication

    Autentication is the process os veryfing
    the user credentials to asses if all is 
    as expected; nevertheless, authorization
    is the process that takes place once the
    autentication process went correctly. In
    this step, the autenticated user
    receives acces to the resources
*/

class JwtManager {
    /*
        signing VS Verification

        The signing refers to the process in which JWT
        creates the token the user will use to
        requests resources access.

        The verification is the process of revewing the
        token in order to assess it was not maliciously
        altered
    */    

    // Veryfing method
    static verifyToken(token, secret) {
        return jwt.verify(token, secret);
    }

    // Signing methods
    static signToken(payload, secret) {
        return jwt.sign(payload, secret);
    }

}
/*
    Implementing the JWT
    
    The auth router must sign the login process
    by returning the token. This if done after
    the validations in the autentication process
    ran succesfully

    I.E:
        router.post('/login',
          passport.authenticate('local', {session: false}),
          async (req, res, next) => {
            try {
              const user = req.user;
              const token = jwt.sign(payload, config.jwtSecret);
              res.json({user, token});
            } catch (error) {
              next(error);
            }
          }
        );
*/
/*
    Protecting the Routes
*/