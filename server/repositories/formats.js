const Sequelize = require('sequelize');
var Formats = require("../models").Formats;

class FormatsRepo {

	addNewFormat(productId, format){
		for(var i = 0; i<format.length; i++){
			Formats.sequelize.query("INSERT INTO Formats (FORMAT_PROD_ID, FORMAT_INFO) VALUES ('"+productId+"','"+format[i]+"')");	
		}
		return true;
	};
}

module.exports = new FormatsRepo();