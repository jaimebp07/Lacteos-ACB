const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');

router.post('/register_product', productController.register_product);

router.post('/add_product', productController.add)

router.get('/delete_product/:id', productController.delete_product);

router.get('/product_management', productController.mostrar_products)

router.post('/edit_product', productController.edit_product)

router.get('/make_sale', productController.make_sale)

module.exports = router;