'use strict';
module.exports = (sequelize, DataTypes) => {
  const Formats = sequelize.define('Formats', {
    FORMAT_PROD_ID: DataTypes.STRING
  }, {});
  Formats.associate = function(models) {
    // associations can be defined here
  };
  return Formats;
};