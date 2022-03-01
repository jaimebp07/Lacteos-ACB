const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

//Mostrar los usuarios (GET)
router.get('/users', userController.mostrar)

router.get('/administrator_session', userController.administrator_session)

//Crear un usurio (POST)
router.post('/add', userController.add)

//15 d
router.post('/validate', userController.validate)

router.post('/log_in', userController.log_in)

router.post('/register_user', userController.register_user)
//15 d

router.get('/delete/:id', userController.delete)

router.get('/home', userController.home)

router.post('/edit', userController.edit)


module.exports = router