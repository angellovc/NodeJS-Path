'use strict';
const {BOOKTABLE, BookSchema, Book} = require('../models/bookModel');

module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.createTable(BOOKTABLE, BookSchema);
    },

    async down (queryInterface, Sequelize) {
        await queryInterface.dropTable(BOOKTABLE);
    }
};
