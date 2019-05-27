const Sequelize = require('sequelize');
var Products = require("../models").Product;

class ProductsRepo {
	getAllProducts(){
		return Products.findAll();
	};

	changeProductData( productId, name, code, info){
		return Products.findOne({
			where: {
				id: productId
			}
		}).then(product => {
			let newData = {
				name: name,
				code: code,
				description: info
			}
			return product.update(newData)
		})

	}

	addNewProduct(name, code, info){
		return Products.create({
			name: name,
			code: code,
			description: info
		})
	};
}

module.exports = new ProductsRepo();
