const express = require('express');
const { userController } = require('../controller');
const { auth } = require('../helper/authToken');
const routers = express.Router()

routers.get('/keeplogin', auth, userController.keepLogin)
routers.get('/address', userController.getAddress)
routers.get('/defAddress', userController.getDefaultAddress)

module.exports = routers