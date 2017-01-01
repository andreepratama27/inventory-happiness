"use strict";
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const TransactionSchema = require('../schema/Transaction')

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
		

	}

	destroy(req, res) {
	
	}
}

module.exports = new Transaction