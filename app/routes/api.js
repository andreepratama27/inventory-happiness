require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()
const ProductCtrl = require('../controllers/Product');

const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const mongoUrl = process.env.MONGODB_URL

mongoose.Promise = global.Promise

mongoose.connect(mongoUrl);


router.post('/api/product', ProductCtrl.getUser)

module.exports  = router