var productModel = require('../models/product');
let { RES_DATA_SUCCESS, RES_DATA_FAIL, INVALID, EXIST, NOT_EXIST, NOT_AVAILABLE } = require('./response');

// create product
createProductController = (req, res) => {
  let product = req.body;
  product.MaLoaiSanPham ? null : product.MaLoaiSanPham = 1
  product.MaHangSanXuat ? null : product.MaHangSanXuat = 1
  
  productModel.createProduct(product)
    .then(data => res.json(RES_DATA_SUCCESS('create product success', 201, data)))
    .catch(err => res.json(RES_DATA_FAIL('CREATE_PRODUCT_FAIL', 400, err)))
};
// find all
findAllProductController = (req, res) => {
  productModel.findAllProduct(req.query)
    .then(data => res.json(RES_DATA_SUCCESS('find product success', 200, data)))
    .catch(err => res.json(RES_DATA_FAIL('find all product fail', 400, err)))
};
findProductByIdController = (req, res) => {
  productModel.findProductById(req.params.product_id)
    .then(data => res.json(RES_DATA_SUCCESS('find product success', 200, data)))
    .catch(err => res.json(RES_DATA_FAIL('find product by id fail', 400, err)))
};

findProductByNewestController = (req, res) => {
  productModel.findProductByNewest()
    .then(data => res.json(RES_DATA_SUCCESS('find product success', 200, data)))
    .catch(err => res.json(RES_DATA_FAIL('find product by newest fail', 400, err)))
};

findProductByFeatureController = (req, res) => {
  productModel.findProductByFeature()
    .then(data => res.json(RES_DATA_SUCCESS('find product success', 200, data)))
    .catch(err => res.json(RES_DATA_FAIL('find product by feature fail', 400, err)))
};

// update
updateProductController = (req, res) => {
  let product = req.body;
  if (!product.MaLoaiSanPham) {
    product.MaLoaiSanPham = 1
  }
  if (!product.MaHangSanXuat) {
    product.MaHangSanXuat = 1
  }
  product.Id = req.params.product_id
  productModel.updateProduct(product)
    .then(data => res.json(RES_DATA_SUCCESS('update product success', 201, data)))
    .catch(err => res.json(RES_DATA_FAIL('update product fail', 400, err)))
};

deleteProductController = (req, res) => {
  productModel.deleteProduct(req.params.product_id)
    .then(data => res.json(RES_DATA_SUCCESS('delete product success', 201, data)))
    .catch(err => res.json(RES_DATA_FAIL('delete product fail', 400, err)))
};


module.exports = {
  findAllProductController,
  findProductByNewestController,
  findProductByFeatureController,
  findProductByIdController,

  createProductController,
  updateProductController,
  deleteProductController,
}