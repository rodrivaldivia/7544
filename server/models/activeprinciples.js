'use strict';
module.exports = (sequelize, DataTypes) => {
  const ActivePrinciples = sequelize.define('ActivePrinciples', {
    AP_NAME: DataTypes.STRING
  }, {});
  ActivePrinciples.associate = function(models) {
    // associations can be defined here
  };
  return ActivePrinciples;
};