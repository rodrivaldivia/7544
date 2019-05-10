var express = require('express');
var router = express.Router();
var productsRepo = require('../repositories/products');

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

module.exports = router;
