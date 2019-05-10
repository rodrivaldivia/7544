const Sequelize = require('sequelize');
var Products = require("../models").Product;

class ProductsRepo {
	getAllProducts(){
		return Products.findAll({});
	}
}

module.exports = new ProductsRepo();
