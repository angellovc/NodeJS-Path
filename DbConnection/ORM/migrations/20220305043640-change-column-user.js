'use strict';
const {DataTypes} = require('sequelize');
const {USERTABLE} = require('../models/userModel');

module.exports = {
    async up (queryInterface, Sequelize) {
        // Table name, column name, new column schema
        await queryInterface.changeColumn(USERTABLE, 'id', {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
            field: 'id',
            unique: true
        });
    },

  async down (queryInterface, Sequelize) {
  }
};
