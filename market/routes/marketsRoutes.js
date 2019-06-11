const express = require('express');

const usersController = require('../controllers/users')

const router = express.Router();

router.get('/', usersController.getAllUsers)
router.get('/:id', usersController.getMarketById)
router.post('/:id/add-stall', usersController.addStall)

module.exports = router