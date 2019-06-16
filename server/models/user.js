'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
	    username: {
	        primaryKey: true,
	        type: DataTypes.STRING
	    },
	    password: {
	        type: DataTypes.STRING
	    },
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};