'use strict';
module.exports = (sequelize, DataTypes) => {
  const Formats = sequelize.define('Formats', {
    productId: DataTypes.STRING
  }, {});
  Formats.associate = function(models) {
    // associations can be defined here
  };
  return Formats;
};