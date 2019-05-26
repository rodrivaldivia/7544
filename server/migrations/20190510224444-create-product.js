'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Products', {
      PROD_ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      PROD_NAME: {
        allowNull: false,
        type: Sequelize.STRING
      },
      PROD_CODE: {
        allowNull: false,
        type: Sequelize.STRING
      },
      PROD_DESCRIPTION: {
        allowNull: false,
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Products');
  }
};