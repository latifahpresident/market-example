const express = require('express');

const productsController = require('../controllers/products')

const router = express.Router();

router.post('/:id/addProduct', productsController.addProduct)

module.exports = router