const express = require('express');
const router = express.Router();

const inventoryController = require('../controllers/inventoryController');

router.get('/inventory_management', inventoryController.show_products_inventory);

router.post('/add_amount_inventory', inventoryController.add_amount_inventory);

router.post('/sub_amount_inventory', inventoryController.sub_amount_inventory);

module.exports = router;
