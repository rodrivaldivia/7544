'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ActivePrinciples', {
      AP_ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      AP_NAME: {
        allowNull: false,
        type: Sequelize.STRING
      },
      AP_PROD_ID: {
        allowNull: false,
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ActivePrinciples');
  }
};