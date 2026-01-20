const express = require('express');
const orderRouter = express.Router();
const addOrderController = require('../controllers/orders/addOrderController');
const getAllOrderController = require('../controllers/orders/getAllOrderController');
const getOrderByIdController = require('../controllers/orders/getOrderByIdController');
const updateOrderController = require('../controllers/orders/updateOrderController');
const deleteOrderController = require('../controllers/orders/deleteOrderController');

orderRouter.post('/orders/create', addOrderController);
orderRouter.get('/orders/getall', getAllOrderController);
orderRouter.get('/orders/getById', getOrderByIdController);
orderRouter.put('/orders/update', updateOrderController);
orderRouter.delete('/orders/delete', deleteOrderController);

module.exports = orderRouter
