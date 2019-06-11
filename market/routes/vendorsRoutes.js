const express = require('express');
const vendorsController = require('../controllers/vendors')
const router = express.Router();

//vendors profile shows their products also
router.get('/:id', vendorsController.getVendorsById)
router.get('/:id/products', vendorsController.getVendorsProducts)


module.exports = router
