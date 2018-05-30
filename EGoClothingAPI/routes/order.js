var express = require('express');
var router = express.Router();
let order = require('../controllers/order');
let middleWare = require('../controllers/middle_ware');

// MARK - GET all order, only ADMIN
router.get('/',
  middleWare.verifyTokenController,
  middleWare.verifyAdminController,
  order.findOrdersController),

// MARK - GET order by username, only ADMIN and OWNER
router.get('/:username',
  middleWare.verifyTokenController,
  middleWare.verifyOwnerController,
  order.findOrderByAccountUsernameController),

// MARK - CREATE order, only ADMIN and OWNER
router.post('/:username',
  middleWare.verifyTokenController,
  middleWare.verifyOwnerController,
  order.createOrderController),

// MARK - UPDATE order by username, only ADMIN and OWNER
router.put('/:username',
  middleWare.verifyTokenController,
  middleWare.verifyOwnerController,
  order.updateOrderController),

// MARK - DELETE order by username, only ADMIN and OWNER
router.put('/delete/:username',
  middleWare.verifyTokenController,
  middleWare.verifyOwnerController,
  order.deleteOrderController)

module.exports = router;
