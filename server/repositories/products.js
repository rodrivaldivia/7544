const Sequelize = require('sequelize');
var Products = require("../models").Product;

class ProductsRepo {
	getAllProducts(){
		return Products.sequelize.query("SELECT * FROM Products");
		//return Products.findAll({});
	};

	addNewProduct(name, code, info){
		console.log("Name " + name);
		console.log("Code " + code);
		console.log("Info " + info);
		return Products.sequelize.query("INSERT INTO Products (PROD_NAME, PROD_CODE, PROD_DESCRIPTION) VALUES ('"+name+"','"+code+"','"+info+"')");
	};
}

module.exports = new ProductsRepo();
