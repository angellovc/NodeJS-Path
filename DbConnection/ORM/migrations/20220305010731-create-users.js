'use strict';
/*
    Creating the migrations

    The command 
        sequelize-cli migration:generate --name create-user
    will create a base file in which we need to define
    how the migration will be done. It won't create the
    migration file for us, just the base of it
*/

/*
    To run the migrations we use sequelize-cli
    The different type of operations that can
    be done are written below

        Run the migrations
            sequelize-cli db:migrate
        Revert migration
            sequelize-cli db:migrate:undo
        Delete all the migrations
            sequelize-cli db:migrate:undo:all
*/
const {UserSchema, USERTABLE} = require('../models/userModel');

module.exports = {
    async up (queryInterface, Sequelize) {
        // Here goes the table schema we pretend to migrate
        // First we pass the DB table name and then it goes the Schema itself 
        await queryInterface.createTable(USERTABLE, UserSchema);    
    },
    async down (queryInterface, Sequelize) {
        // This is used to revert changes or do rollback
        // Since the table has been created, we don't need to pass through
        // the schema, we pass just the table
        await queryInterface.dropTable(USERTABLE);
    }
};