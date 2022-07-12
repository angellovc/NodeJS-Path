const bcrypt = require('bcrypt');
const { Strategy } = require('passport-local');
/* 
    By using strategy we create the
    autentication process

    Strategy receives:
        1 arg: an object of the name of the fields that will be validated
        2 arg: callback where the validation goes
*/
const LocalStrategy = new Strategy({
    usernameField: 'email',
    passwordField: 'password'
  },
  // The call back behaves as a middleware 
  // that will check the user credentials
  async (email, password, done) => {
    try {
        // Call the DB and compare using bcrypt if the pass typed in
        // by the user matches the password encrypted in the DB
        const user = await service.findByEmail(email);
        if (!user) {
            // if the first argument of done is not filled with null
            // passport will take it as an error (error middleware)
            done('Error: unathorized', false);
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            done('Error: unathorized', false);
        }
        // When the first arugment of done is null
        // it means the execution can continue without errors
        done(null, user);
    } catch (error) {
        done(error, false);
    }
  }
);

module.exports = LocalStrategy;