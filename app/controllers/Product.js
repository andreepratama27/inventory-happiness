const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ProductSchema = require('../schema/Product')

exports.getUser = function (req, res) {


	const productSchema = new ProductSchema({
		code: req.body.code,
		name: req.body.name
	})

	productSchema.save().then(function(param){
		return res.json(param)
	})
};