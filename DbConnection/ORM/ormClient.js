/*
    ORM

    An orm is a framework in charge of managing 
    DB's without SQL code. JS has two kind of
    orm: Sequalize and TypeOrm(used for TS)

    Setting up Sequalize for postgres
        Installing Framework
            npm install --save sequelize
        Installing PG drivers
            npm install --save pg pg-hstore
*/

const {Sequelize} = require('sequelize');
const setupModels = require('./models/models');

const USER = 'avc';
const PASSWORD = 'admin123';
const HOST = 'localhost';
const PORT = 54321;
const DATABASE = 'store';

const URI = `postgres://${USER}:${PASSWORD}@${HOST}:${PORT}/${DATABASE}`;
/*
    Sequelize receives the DB URI to which it will connect to
    and an object with a serie of options. This framework
    manages the connections automatically 
*/
const sequelize = new Sequelize(URI, {
    // DB to which sequalize will connect to
    dialect: 'postgres',
    // logging: console.log
})

setupModels(sequelize);

/*
    Sequelize Sync function

    It will creates all the new models atthached to the ORM
    into the database; nevertheless, this is not recommended
    to do in producction, because it will override the schema
    every time the project is launched, the better way to do
    it in production is through migrations
*/
// sequelize.sync();
module.exports = sequelize;
