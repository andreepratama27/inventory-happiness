const mongoose = require('mongoose')
const Schema = mongoose.Schema

var productScema = new Schema({
	code: String,
	name: String,
	quantity: Number,
	note: String,
	supplier : { type: Schema.Types.ObjectId, ref: 'Suppliers' },
	
}, { timestamps: { createdAt: 'created_at' } });

var Product = mongoose.model('Products', productScema);
module.exports = Product