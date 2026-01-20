const express = require('express');
const controllersSignup =  require('../controllers/users/signup')
const controllersLogin = require('../controllers/users/login')
const authRoute = express.Router()

authRoute.post('/register', controllersSignup)
authRoute.post('/login', controllersLogin)

module.exports = authRoute