var express = require('express');
var router = express.Router();
let order = require('../controllers/order');
let mw = require('../controllers/middle_ware');

// MARK - GET all order, only ADMIN
router.get('/',
  mw.verifyTokenController,
  mw.verifyAdminController,
  order.findOrdersController),

// MARK - GET order by username, only ADMIN and OWNER
router.get('/:username',
  mw.verifyTokenController,
  mw.verifyOwnerController,
  order.findOrderByAccountUsernameController),

// MARK - CREATE order, only ADMIN and OWNER
router.post('/:username',
  mw.verifyTokenController,
  mw.verifyOwnerController,
  order.createOrderController),

// MARK - UPDATE order by username, only ADMIN and OWNER
router.put('/:username',
  mw.verifyTokenController,
  mw.verifyOwnerController,
  order.updateOrderController),

// MARK - DELETE order by username, only ADMIN and OWNER
router.put('/delete/:username',
  mw.verifyTokenController,
  mw.verifyOwnerController,
  order.deleteOrderController)

module.exports = router;
