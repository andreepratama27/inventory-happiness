const express = require('express')
const router = express.Router()

router.get('/', function(req, res){
	res.render('index');
});
router.get('/about', function(req, res){
	res.render('index');
});

router.get('/login', function(req, res){
	res.render('login');
});

router.get('/product', function(req, res){
	res.render('index')
})
router.get('/product/add', function(req, res){
	res.render('index')
})

module.exports = router