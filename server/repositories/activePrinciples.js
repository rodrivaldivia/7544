const Sequelize = require('sequelize');
var ActivePrinciples = require("../models").ActivePrinciples;

class ActivePrinciplesRepo {

	addNewPrinciple(productId, activePrinciples){
		let aPrincipleList = []
		activePrinciples.forEach((aPrinciple) => {
			aPrincipleList.push({
				name:aPrinciple,
				productId: productId
			})
		})
		ActivePrinciples.bulkCreate(aPrinciples)
	};
}

module.exports = new ActivePrinciplesRepo();