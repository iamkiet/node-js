var express = require('express');
var router = express.Router();
var product = require('../controllers/product');

router.get('/', product.findAllProductController);
router.get('/:product_id', product.findProductByIdController);
router.post('/', product.createProductController);
router.put('/:product_id', product.updateProductController);
router.delete('/:product_id', product.deleteProductController);

module.exports = router;
