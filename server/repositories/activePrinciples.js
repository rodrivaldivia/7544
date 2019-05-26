const Sequelize = require('sequelize');
var ActivePrinciples = require("../models").ActivePrinciples;

class ActivePrinciplesRepo {

	addNewPrinciple(productId, active){
		return ActivePrinciples.sequelize.query("INSERT INTO ActivePrinciples (AP_NAME, AP_PROD_ID) VALUES ('"+active+"','"+productId+"')");
	};
}

module.exports = new ActivePrinciplesRepo();