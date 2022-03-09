'use strict';

const {USERTABLE, UserSchema} = require('../models/userModel');

module.exports = {
    async up (queryInterface, Sequelize) {
        // First argument: Table name
        // Second argument: Column name
        // Thrith argument: Column schema
        await queryInterface.addColumn(USERTABLE, 'role', UserSchema.role);
    },

    async down (queryInterface, Sequelize) {
        await queryInterface.removeColumn(USERTABLE, 'role', UserSchema.role);
    }
};
