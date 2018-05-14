var express = require('express');
var router = express.Router();
var product = require('../controllers/product');

// Retrieve all product
// router.get('/', product.findAllProduct),
// router.get('/type/:product_type', product.findProductByType),
// router.get('/company/:company_name', product.findProductByCompany),
// router.get('/search', product.findProductByName)

router.get('/', product.findAllProductController);
router.post('/', product.createProductController);
router.put('/:product_id', product.updateProductController);
router.delete('/:product_id', product.deleteProductController);

// // Retrieve a single Note with noteId
// router.get('/:productId', product.findOneProduct),
//   // Create a new Note
// router.post('/', product.createProduct),

// // Update a Note with celebrityId
// router.put('/:productId', product.updateProduct),

// // Delete a Note with celebrityId
// router.delete('/:productId', product.validateproduct, product.deleteProduct)

module.exports = router;
