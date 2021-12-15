const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

//Mostrar los usuarios (GET)
router.get('/users', userController.mostrar)

//Crear un usurio (POST)
router.post('/add', userController.add)

module.exports = router