var productModel = require('../models/product');
let type_response = require('./type_response');

let querystring = require('querystring');

// exports.createProduct = function (req, res) {
//     // Create and Save a new celebrity
//     ProductModel.createProduct(req.body, function (err, data) {
//         if (err) {
//             res.status(400).send(err);
//             return;
//         }
//         res.status(201).send(data);
//     })
// };

exports.findAllProduct = function (req, res) {
    // Retrieve and return all notes from the database.
    productModel.findAllProduct(function (err, data) {
            if (err) {
                res.status(400).send(err);
                return;
            }
            res.send(data);
        }
    );
};

exports.findProductByType = function (req, res) {
  let { product_type } = req.params;
  let { limit, offset } = req.query;

  productModel.findProductByType(product_type, limit, offset)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.send(err);
    throw err;
  })
};

exports.findProductByCompany = function (req, res) {
  let { company_name } = req.params;
  let { limit, offset } = req.query;

  productModel.findProductByCompany(company_name, limit, offset)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.send(err);
    throw err;
  })
};


exports.findProductByName = (req, res) => {
  let { TenSanPham } = req.query;
  productModel.findProductByName(TenSanPham)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.send(err);
    throw err;
  })
}

// exports.updateProduct = function (req, res) {
//     // Update a note identified by the noteId in the request
//     let { ProductId } = req.params;
//     ProductModel.updateProduct(ProductId, req.body, (err, data) => {
//         if(err){
//             res.status(400).send(err);
//             return
//         }
//         res.send(data)
//     })
// };

// exports.deleteProduct = function (req, res) {
//     let { MaTaiKhoan } = req.Product[0];
//     // Delete a note with the specified noteId in the request
//     ProductModel.deleteProduct(MaTaiKhoan, (err, data) => {
//         if(err){
//             res.status(400).send(err);
//             return
//         }
//         res.send({
//             data: type_response.responseSuccess("DELETE")
//         })
//     })
// };

// exports.validateProduct = (req, res, next) => {
//     let { ProductId } = req.params;
//     ProductModel.findOneProduct(ProductId, (err, data) => {
//         if (err) {
//             res.status(400).send(err);
//             return;
//         }
//         if (data.length < 1) {
//             res.send({
//                 "STATUS": 404,
//                 "MESSAGE": "Product NOT FOUND"
//             })
//         } else {
//             req.Product = data
//             next();
//         }
//     });
// }