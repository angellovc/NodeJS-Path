/*
    bcrypt

    It is a library usually used to encrypt the
    user passwords, since it's not a good practice
    to store them as they are into the DB. Only the
    user is expected to know them 
*/
const bcrypt = require('bcrypt');

class encrypt {
    constructor() {

    }

    /*
        bcrypt hash method is used to encrypt the password
        1 argument: password to be encrypted
        2 argument: the amount of times the encryption algorithm will
        run over the password, the more the safer
    */
    static async encryptPassword(password) {
        return await bcrypt.hash(password, 10);
    }

    /*
        The autentication process is the process of
        checking the user who is trying to access is
        really who he says to be. In this case, we do
        this by comparing the password entered in by
        the user matches to the one encrypted in the 
        db

        1 arg: password typed in by the user
        2 arg: db encrypted password
    */
    static async checkPassword(userPassword, databasePassword) {
        return await bcrypt.compare(password, databasePassword);
    }
}