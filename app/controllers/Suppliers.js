"use strict";
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ProductSchema = require('../schema/Product')
const SupplierSchema = require('../schema/Supplier')

class Suppliers {

	index(req, res) {
		
		SupplierSchema.find({}).then(function(data){
			return res.status(200).json(data)
		})
		
	}

	show(req, res){

	}

	update(req, res){

		
		
	}

	store(req, res) {
		

		const supplierSchema = new SupplierSchema({
			code: req.body.code,
			name: req.body.name
		})


		supplierSchema.save().then(function(param){
			return res.status(201).json(param)
		})
		
	}

	destroy(req, res) {
	
	}
}

module.exports = new Suppliers