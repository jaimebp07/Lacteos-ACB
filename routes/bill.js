const express = require('express');
const router = express.Router();

const billController = require('../controllers/billController');

router.post('/save_the_purchase', billController.addBill)

module.exports = router;
