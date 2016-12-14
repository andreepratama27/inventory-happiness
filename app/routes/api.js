const express = require('express')
const router = express.Router()
const ProductCtrl = require('../controllers/Product');
const RegisterCtrl = require('../controllers/Register');

router.post('/api/register', RegisterCtrl.register);

router.get('/api/product', ProductCtrl.index)
router.post('/api/product', ProductCtrl.store)
router.get('/api/product/:id', ProductCtrl.show)
router.put('/api/product/:id', ProductCtrl.update)
router.delete('/api/product/:id', ProductCtrl.destroy)

module.exports  = router