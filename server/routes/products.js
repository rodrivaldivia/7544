var express = require('express');
var router = express.Router();
var productsRepo = require('../repositories/products');
var imagesRepo = require('../repositories/products');
var activePrinciplesRepo = require('../repositories/products');
var formatsRepo = require('../repositories/products');

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
		res.send(values);
	});
	//res.send(req.body);
})

module.exports = router;
