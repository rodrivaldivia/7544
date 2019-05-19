'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Formats', {
      FORMAT_ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      FORMAT_PROD_ID: {
        allowNull: false,
        type: Sequelize.STRING
      },
      FORMAT_INFO: {
        allowNull:false,
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Formats');
  }
};