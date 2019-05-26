const Sequelize = require('sequelize');
var Images = require("../models").Images;

class ImagesRepo {

	addNewImage(productId, imgLinkList){
		let imgList = []
		imgLinkList.forEach((link) => {
			imgList.push({
				productId: productId,
				link : link
			})
		})
		return Images.bulkCreate(imgList)
	};
}

module.exports = new ImagesRepo();