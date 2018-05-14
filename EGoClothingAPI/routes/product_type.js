var express = require('express');
var router = express.Router();
var product_type = require('../controllers/product_type');

router.get('/', product_type.findAllProductTypeController);
router.get('/:product_type_id', product_type.findProductTypeByIdController);
router.post('/', product_type.createProductTypeController);
router.put('/:product_type_id', product_type.updateProductTypeController);
router.delete('/:product_type_id', product_type.deleteProductTypeController);

module.exports = router;
