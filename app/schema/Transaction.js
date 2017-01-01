const mongoose = require('mongoose')
const Schema = mongoose.Schema

var transactionSchema = new Schema({
	code: Number,
	type: Number,
	note: String,
	quantity: Number,
	supplier : { type: Schema.Types.ObjectId, ref: 'Suppliers' },
	product : { type: Schema.Types.ObjectId, ref: 'Products' },

}, { timestamps: { createdAt: 'created_at' } });

var Product = mongoose.model('Transactions', transactionSchema);
module.exports = Product