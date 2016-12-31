"use strict";
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ProductSchema = require('../schema/Product')

class Product {

	index(req, res) {
		
		ProductSchema.find({}).then(function(data){
			return res.status(200).json(data)
		})
	}

	show(req, res){

		const code = req.params.id

		ProductSchema.find({code}).then(function(result){
			return res.status(200).json(result);
		})
	}


	update(req, res){

		
	}

	store(req, res) {
		
		const productSchema = new ProductSchema({
			code: req.body.code,
			name: req.body.name
		})

		productSchema.save().then(function(param){
			return res.status(201).json(param)
		})
	}

	destroy(req, res) {
		const id = req.params.id

		const hasil = new Promise(function(resolve, reject){

			ProductSchema.findOneAndRemove({'_id': id}, function(){
				resolve(true)
			})
		})

		
		return hasil.then(function(){

			return res.status(204).json([])
		})
	}
}

module.exports = new Product