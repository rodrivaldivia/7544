const Sequelize = require('sequelize');
var Products = require("../models").Product;
var Images = require("../models").Images;
var Formats = require("../models").Formats;

class ProductsRepo {
	getProduct(id){
		return Products.findOne({
			where:{
				id: id
			},
			include:[{
				model: Images
			},{
				model: Formats
			}]
		});

	}
	getAllProducts(){
		return Products.findAll({
			include:[{
				model: Images
			},{
				model: Formats
			}]
		});
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

	deleteProduct(productId){
		return Products.findOne({
			where: {
				id: productId
			},
			include: [{
				model: Images
			},{
				model: Formats	
			}]
		}).then( product => {
			product.Images.forEach(img => {
				img.destroy()
			})
			product.Formats.forEach(img => {
				img.destroy()
			})
			return product.destroy()
		})
	}
}

module.exports = new ProductsRepo();
