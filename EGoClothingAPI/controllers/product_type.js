var productTypeModel = require('../models/product_type');
let response = require('./response');

// create product_type
createProductTypeController = (req, res) => {
  let product_type = req.body;
  product_type.MaLoaiSanPham ? null : product_type.MaLoaiSanPham = 1
  product_type.MaHangSanXuat ? null : product_type.MaHangSanXuat = 1
  
  productTypeModel.createProductType(product_type)
  .then(data => res.json(response.RES_DEFAULT('CREATE_PRODUCT', 201, 'SUCESS', data)))
  .catch(err => res.json(response.RES_DEFAULT('CREATE_PRODUCT', 400, 'FAIL', err)))
};
// find all
findAllProductTypeController = (req, res) => {
  productTypeModel.findAllProductType()
  .then(data => res.json(response.RES_DEFAULT('FIND_PRODUCT', 201, 'SUCESS', data)))
  .catch(err => res.json(response.RES_DEFAULT('FIND_PRODUCT', 400, 'FAIL', err)))
};
// find by id
findProductTypeByIdController = (req, res) => {
  productTypeModel.findProductTypeById(req.params.product_type_id)
  .then(data => res.json(response.RES_DEFAULT('FIND_PRODUCT', 201, 'SUCESS', data)))
  .catch(err => res.json(response.RES_DEFAULT('FIND_PRODUCT', 400, 'FAIL', err)))
};
// update
updateProductTypeController = (req, res) => {
  let product_type = req.body;
  if (!product_type.MaLoaiSanPham) {
    product_type.MaLoaiSanPham = 1
  }
  if (!product_type.MaHangSanXuat) {
    product_type.MaHangSanXuat = 1
  }
  product_type.MaLoaiSanPham = req.params.product_type_id
  productTypeModel.updateProductType(product_type)
  .then(data => res.json(response.RES_DEFAULT('UPDATE_PRODUCT', 201, 'SUCESS', data)))
  .catch(err => res.json(response.RES_DEFAULT('UPDATE_PRODUCT', 400, 'FAIL', err)))
};

deleteProductTypeController = (req, res) => {
  productTypeModel.deleteProductType(req.params.product_type_id)
  .then(data => res.json(response.RES_DEFAULT('DELETE_PRODUCT', 201, 'SUCESS', data)))
  .catch(err => res.json(response.RES_DEFAULT('DELETE_PRODUCT', 400, 'FAIL', err)))
};

validateProductTypeController = (req, res, next) => {
  productTypeModel.validateProductType(req.params.product_type_id)
  .then(data =>  {
    console.log(data);
    next()
  })
  .catch(err => {
    res.send({
      message: 'ERROR VALIDATE PRODUCT',
      error: err
    })
  }) 
}

module.exports = {
  createProductTypeController,
  findAllProductTypeController,
  findProductTypeByIdController,
  updateProductTypeController,
  deleteProductTypeController,
  validateProductTypeController
}