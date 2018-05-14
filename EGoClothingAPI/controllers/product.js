var productModel = require('../models/product');
let response = require('./response');

// create product
createProductController = (req, res) => {
  let product = req.body;
  product.MaLoaiSanPham ? null : product.MaLoaiSanPham = 1
  product.MaHangSanXuat ? null : product.MaHangSanXuat = 1
  
  productModel.createProduct(product)
  .then(data => res.json(response.RES_DEFAULT('CREATE_PRODUCT', 201, 'SUCESS', data)))
  .catch(err => res.json(response.RES_DEFAULT('CREATE_PRODUCT', 400, 'FAIL', err)))
};
// find all
findAllProductController = (req, res) => {
  productModel.findAllProduct()
  .then(data => res.json(response.RES_DEFAULT('FIND_PRODUCT', 201, 'SUCESS', data)))
  .catch(err => res.json(response.RES_DEFAULT('FIND_PRODUCT', 400, 'FAIL', err)))
};
findProductByIdController = (req, res) => {
  productModel.findProductById(req.params.product_id)
  .then(data => res.json(response.RES_DEFAULT('FIND_PRODUCT', 201, 'SUCESS', data)))
  .catch(err => res.json(response.RES_DEFAULT('FIND_PRODUCT', 400, 'FAIL', err)))
};

// find by id
// find by product_type
// find by product_name
// find by company_name

// exports.findProductByType = function (req, res) {
//   let { product_type } = req.params;
//   let { limit, offset } = req.query;

//   productModel.findProductByType(product_type, limit, offset)
//   .then(data => {
//     res.send(data);
//   })
//   .catch(err => {
//     res.send(err);
//     throw err;
//   })
// };

// exports.findProductByCompany = function (req, res) {
//   let { company_name } = req.params;
//   let { limit, offset } = req.query;

//   productModel.findProductByCompany(company_name, limit, offset)
//   .then(data => {
//     res.send(data);
//   })
//   .catch(err => {
//     res.send(err);
//     throw err;
//   })
// };


// exports.findProductByName = (req, res) => {
//   let { TenSanPham } = req.query;
//   productModel.findProductByName(TenSanPham)
//   .then(data => {
//     res.send(data);
//   })
//   .catch(err => {
//     res.send(err);
//     throw err;
//   })
// }


// update
updateProductController = (req, res) => {
  let product = req.body;
  if (!product.MaLoaiSanPham) {
    product.MaLoaiSanPham = 1
  }
  if (!product.MaHangSanXuat) {
    product.MaHangSanXuat = 1
  }
  product.MaSanPham = req.params.product_id
  productModel.updateProduct(product)
  .then(data => {
    res.json(data)
  })
  .catch(err => {
    res.send({
      message: 'ERROR UPDATE PRODUCT',
      error: err
    })
  }) 
};

deleteProductController = (req, res) => {
  productModel.deleteProduct(req.params.product_id)
  .then(data => {
    res.json(data)
  })
  .catch(err => {
    res.send({
      message: 'ERROR DELETE PRODUCT',
      error: err
    })
  }) 
};

validateProductController = (req, res, next) => {
  productModel.validateProduct(req.params.product_id)
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
  createProductController,
  findAllProductController,
  findProductByIdController,
  updateProductController,
  deleteProductController,
  validateProductController
}