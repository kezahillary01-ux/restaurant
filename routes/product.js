const express = require('express');
const productRouter = express.Router();
const addProduct = require('../controllers/products/addProductController');
const updateProduct = require('../controllers/products/addProductController');

productRouter.post('/products/add', addProduct.upload , addProduct.addProduct);
productRouter.patch('/products/update', addProduct.upload ,updateProduct.addProduct);

module.exports = productRouter
