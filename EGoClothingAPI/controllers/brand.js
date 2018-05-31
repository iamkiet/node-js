var brandModel = require('../models/brand');
let { RES_DATA_SUCCESS, RES_DATA_FAIL, INVALID, EXIST, NOT_EXIST, NOT_AVAILABLE } = require('./response');

// create brand
createBrandController = (req, res) => {
  let brand = req.body;
  
  brandModel.createBrand(brand)
    .then(data => res.json(RES_DATA_SUCCESS('create brand success', 201, data)))
    .catch(err => res.json(RES_DATA_FAIL('create brand fail', 400, err)))
};

// find all
findBrandsController = (req, res) => {
  brandModel.findBrands()
    .then(data => res.json(RES_DATA_SUCCESS('find brands success', 200, data)))
    .catch(err => res.json(RES_DATA_FAIL('find brands fail', 400, err)))
};
// find by id
findBrandByIdController = (req, res) => {
  brandModel.findBrandById(req.params.brand_id)
    .then(data => {
      if (data.length < 1) {
        res.json(NOT_EXIST('brand'))
        return
      }
      res.json(RES_DATA_SUCCESS('find brand by id success', 200, data))
    })
    .catch(err => res.json(RES_DATA_FAIL('find brand by id fail', 400, err)))
};
// update
updateBrandController = (req, res) => {
  let brand = req.body;
  brand.Brand_Id = req.params.brand_id
  brandModel.updateBrand(brand)
    .then(data => res.json(RES_DATA_SUCCESS('update brand success', 201, data)))
    .catch(err => res.json(RES_DATA_FAIL('update brand fail', 400, err)))
};

deleteBrandController = (req, res) => {
  brandModel.deleteBrand(req.params.brand_id)
    .then(data => res.json(RES_DATA_SUCCESS('delete brand success', 201, data)))
    .catch(err => res.json(RES_DATA_FAIL('delete brand fail', 400, err)))
};

module.exports = {
  createBrandController,
  findBrandsController,
  findBrandByIdController,
  updateBrandController,
  deleteBrandController,
}