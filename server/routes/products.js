var express = require('express');
var router = express.Router();
var productsRepository = require('../repositories/products');
var imagesRepository = require('../repositories/images');
var activePrinciplesRepo = require('../repositories/activePrinciples');
var formatsRepository = require('../repositories/formats');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/', function(req, res, next) {
	console.log("HOLA")
	return productsRepository.getAllProducts().then((products) => {
		res.json({
			products
		})
	}) 
});

router.post('/', function(req, res){
	var name = req.body.name;
	var code = req.body.code;
	var info = req.body.info;
	var images = req.body.imgList;
	// var format = req.body.format;
	// var activePrinciples = req.body.activePrinciples;
	productsRepository.addNewProduct(name, code, info).then((product) => {
		var productId = product.id;
		console.log(product.id, images[0]);

		imagesRepository.addNewImage(productId, images);
		// formatsRepository.addNewFormat(productId, format);
		// activePrinciplesRepo.addNewPrinciple(productId, activePrinciples);
		res.json(product);
	});
	//res.send(req.body);
})


module.exports = router;
