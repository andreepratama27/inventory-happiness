"use strict";
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const TransactionSchema = require('../schema/Transaction')
const ProductSchema = require('../schema/Product')

class Transaction {

	index(req, res) {
		TransactionSchema.find({}).populate(['supplier', 'product']).then(function(data){
			return res.status(200).json(data)
		})
		
	}

	show(req, res){

	}

	update(req, res){

		
		
	}

	store(req, res) {
		
		const code = Math.floor(Math.random()*90000) + 10000

		const data = {

			code,
			type: req.body.type,
			note: req.body.note,
			quantity: req.body.quantity,
			supplier : req.body.supplier,
			product : req.body.product,
		}


		const proTransaksi = new Promise(function(resolve, reject){

			const transactionSchema = new TransactionSchema(data)

			transactionSchema.save().then(function(transaksi){
				
				transaksi.populate(['product', 'supplier'], function(){

					resolve(transaksi)

				})

			})
		})

		const updateProductQuantity = new Promise(function(resolve, reject){


			ProductSchema.findById(req.body.product, function(err, product){


				if (parseInt(req.body.quantity) === 1) {
					
					product.quantity -= req.body.quantity

				} else {
					
					product.quantity += req.body.quantity
				}

				product.save().then(function(){

					resolve(product)
				})
			})
		})


		Promise.all([proTransaksi, updateProductQuantity])
		    .then(function(allData) {

		    	const response = {
		    		transaksi : allData[0],
		    		product: allData[1]
		    	}
		        res.json(response)
		    });



	}

	destroy(req, res) {
	
	}
}

module.exports = new Transaction