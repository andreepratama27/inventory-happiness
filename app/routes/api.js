require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()
const ProductCtrl = require('../controllers/Product');

const mongoUrl = process.env.MONGODB_URL

mongoose.Promise = global.Promise

mongoose.connect(mongoUrl);

router.get('/api/product', ProductCtrl.index)
router.post('/api/product', ProductCtrl.store)
router.delete('/api/product/:id', function(req, res){

})

module.exports  = router