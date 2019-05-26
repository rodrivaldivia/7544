var express = require('express');
var router = express.Router();
var productsRepo = require('../repositories/products');
var imagesRepo = require('../repositories/images');
var activePrinciplesRepo = require('../repositories/activePrinciples');
var formatsRepo = require('../repositories/formats');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/', function(req, res, next) {
	return productsRepo.getAllProducts().then((products) => {
		res.json({
			products
		})
	}) 
});

router.post('/', function(req, res){
	var name = req.body.name;
	var code = req.body.code;
	var info = req.body.info;
	var images = req.body.img;
	var format = req.body.format;
	var activePrinciples = req.body.activePrinciples;
	console.log(name, code, info, images, format, activePrinciples);
	productsRepo.addNewProduct(name, code, info).then((values) => {
		var productId = values[0];
		imagesRepo.addNewImage(productId, images);
		formatsRepo.addNewFormat(productId, format);
		activePrinciplesRepo.addNewPrinciple(productId, activePrinciples);
		res.json({"productID": productId});
	});
	//res.send(req.body);
})

module.exports = router;
