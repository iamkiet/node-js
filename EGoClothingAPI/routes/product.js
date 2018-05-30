var express = require('express');
var router = express.Router();
var product = require('../controllers/product');
let middleWare = require('../controllers/middle_ware');

router.get('/', product.findAllProductController);
router.get('/feature', product.findProductByFeatureController);
router.get('/newest', product.findProductByNewestController);
router.get('/:product_id', product.findProductByIdController);

// MARK - REQUIRED TOKEN
// MARK - CREATE PRODUCT
router.post('/',
  middleWare.verifyTokenController,
  middleWare.verifyAdminController,
  product.createProductController);
// MARK - UPDATE PRODUCT
router.put('/:product_id',
  middleWare.verifyTokenController,
  middleWare.verifyAdminController,
  product.updateProductController);
// MARK - DELETE PRODUCT
router.delete('/:product_id',
  middleWare.verifyTokenController,
  middleWare.verifyAdminController,
  product.deleteProductController);

module.exports = router;
