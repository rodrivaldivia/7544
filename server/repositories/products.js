const Sequelize = require('sequelize');
var Products = require("../models").Product;

class ProductsRepo {
	getAllProducts(){
		return Products.findAll();
	};

	addNewProduct(name, code, info){
		return Products.create({
			name: name,
			code: code,
			description: info
		})
	};
}

module.exports = new ProductsRepo();
