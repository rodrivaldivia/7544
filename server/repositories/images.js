const Sequelize = require('sequelize');
var Images = require("../models").Images;

class ImagesRepo {

	addNewImage(productId, links){
		for (var i = 0; i < links.length; i++){
			Images.sequelize.query("INSERT INTO Images (IMG_PROD_ID, IMG_LINK) VALUES ('"+productId+"','"+links[i]+"')");	
		}
		return true;
	};
}

module.exports = new ImagesRepo();