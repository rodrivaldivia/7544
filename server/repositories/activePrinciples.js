const Sequelize = require('sequelize');
var ActivePrinciples = require("../models").ActivePrinciples;

class ActivePrinciplesRepo {

	addNewPrinciple(productId, active){
		for(var i = 0; i < active.length; i++){
			ActivePrinciples.sequelize.query("INSERT INTO ActivePrinciples (AP_NAME, AP_PROD_ID) VALUES ('"+active[i]+"','"+productId+"')");	
		}
		return true;
	};
}

module.exports = new ActivePrinciplesRepo();