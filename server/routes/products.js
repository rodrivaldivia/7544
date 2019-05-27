const express = require('express');
const router = express.Router();
const productsRepository = require('../repositories/products');
const imagesRepository = require('../repositories/images');
const activePrinciplesRepo = require('../repositories/activePrinciples');
const formatsRepository = require('../repositories/formats');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/:id',function(req, res){
	return productsRepository.getProduct(req.params.id).then(product => {
		res.json({
			product
		})
	})
})

router.get('/', function(req, res, next) {
	return productsRepository.getAllProducts().then((products) => {
		res.json({
			products
		})
	}) 
});

router.post('/', function(req, res){
	let name = req.body.name;
	let code = req.body.code;
	let info = req.body.info;
	let images = req.body.imgList;
	let formats = req.body.format;
	productsRepository.addNewProduct(name, code, info).then((product) => {
		var productId = product.id;
		console.log(product.id, images[0]);

		imagesRepository.addNewImage(productId, images);
		formatsRepository.addNewFormat(productId, formats);
		res.json(product);
	});
})

router.put('/:id',function(req, res){
	let productId = req.params.id;
	let code = req.body.code;
	let info = req.body.info;
	let name = req.body.name;
	productsRepository.changeProductData(productId, name, code, info).then((product) => {
		res.json(product)
	})

})

router.delete('/:id',function(req, res){
	productsRepository.deleteProduct(req.params.id).then(product => {
		res.json(product)
	})
})

router.delete('/picture/:pictureId',function(req, res){
	imagesRepository.deleteImage(req.params.pictureId)
		.then(data => {
			res.json(data)
		})

})

router.delete('/format/:formatId',function(req, res){
		formatsRepository.deleteFormat(req.params.formatId)
		.then(data => {
			res.json(data)
		})
	
})

router.post('/:productId/picture',function(req, res){
	let productId = req.params.productId;
	let images = req.body.imgList;
	imagesRepository.addNewImage(productId, images).then((imgs) => {
		res.json(imgs)
	})

})

router.post('/:productId/format',function(req, res){
	let productId = req.params.productId;
	let formats = req.body.format;
	formatsRepository.addNewFormat(productId, formats).then((formats) => {
		res.json(formats)
	})

})
module.exports = router;
