const Sequelize = require('sequelize');
var Products = require("../models").Product;
var ProductActivePrinciple = require("../models").ProductActivePrinciple;
var ActivePrinciples = require("../models").ActivePrinciples;
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
			},{
				model: ActivePrinciples
			}]
		});

	}
	getAllProducts(){
		return Products.findAll({
			include:[{
				model: Images
			},{
				model: Formats
			},{
				model: ActivePrinciples
			}]
		});
	};

	changeProductData( productId, name, code, info, activePrinciples){
		let _self = this
		return Products.findOne({
			where: {
				id: productId
			},
			include:[{
				model: ActivePrinciples
			}]
		}).then(product => {
			let newData = {
				name: name,
				code: code,
				description: info
			}
			product.update(newData).then(product => {
				let removedList = []
				product.ActivePrinciples.forEach(principle => {
					console.log(activePrinciples)
					if(activePrinciples.includes(principle.id)){
						activePrinciples.splice(activePrinciples.indexOf(principle.id),1)
					}else{
						removedList.push(principle.id)
					}
				})
				console.log(activePrinciples)
				return _self.updateLinks(product.id, activePrinciples, removedList).then(data => {
					return _self.getProduct(product.id)
				})
			})
		})

	}

	updateLinks(productId, newList, removedList){
		let newRegisters = []
		newList.forEach(activePrincipleId => {
			newRegisters.push({
				productId,
				activePrincipleId
			})
		})
		console.log(removedList)
		ProductActivePrinciple.destroy({
			where:{
				activePrincipleId: removedList,
				productId
			}
		})
		return ProductActivePrinciple.bulkCreate(newRegisters)
	}

	addNewProduct(name, code, info){
		return Products.create({
			name: name,
			code: code,
			description: info
		})
	};

	linkProductAndPrinciple(productId, principleList){
		let newRegisters = []
		principleList.forEach(activePrincipleId => {
			newRegisters.push({
				productId,
				activePrincipleId
			})
		})
		return ProductActivePrinciple.bulkCreate(newRegisters)
	}

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
