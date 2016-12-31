const mongoose = require('mongoose')
const Schema = mongoose.Schema

var supplierSchema = new Schema({
	name: String,
	code: String
}, { timestamps: { createdAt: 'created_at' } });

var Product = mongoose.model('Suppliers', productScema);
module.exports = Product