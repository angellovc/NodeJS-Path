/*
    Sometimes it's necessary to hide some sinsitive information
    to do this, we pass that informatio to Node through the env
    variables; nevertheless when our program needs a lot of them
    we can put them locally into a file and tell the library
    dotenv to load them for us
*/
// this way dotenv will search into our project root for the .env file
// and will load the variables there
require('dotenv').config();

// Once the env variables are loaded, we can take them
// from process.env to use it in our project
const config = {
    host: process.env.HOST,
    port: process.env.PORT,
    database: process.env.DATABASE
}

module.exports = config;