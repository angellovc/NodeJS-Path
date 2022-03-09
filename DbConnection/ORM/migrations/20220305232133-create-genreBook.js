'use strict';

const {GENRETABLE, GenreSchema} = require('../models/genreModel')
const {GENREBOOKTABLE, GenreBookSchema} = require('../models/genreBookModel');

module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.createTable(GENRETABLE, GenreSchema);
        await queryInterface.createTable(GENREBOOKTABLE, GenreBookSchema);
    },

    async down (queryInterface, Sequelize) {
        await queryInterface.dropTable(GENRETABLE, GenreSchema);
        await queryInterface.dropTable(GENREBOOKTABLE, GenreBookSchema);
    }
};
