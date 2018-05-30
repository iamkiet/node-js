var categoryModel = require('../models/category');
let { RES_DATA_SUCCESS, RES_DATA_FAIL, INVALID, EXIST, NOT_EXIST, NOT_AVAILABLE } = require('./response');

// create category
createCategoryController = (req, res) => {
  let category = req.body;
  
  categoryModel.createCategory(category)
    .then(data => res.json(RES_DATA_SUCCESS('create category success', 201, data)))
    .catch(err => res.json(RES_DATA_FAIL('create category fail', 400, err)))
};

// find all
findCategoriesController = (req, res) => {
  categoryModel.findCategories()
    .then(data => res.json(RES_DATA_SUCCESS('find categories success', 200, data)))
    .catch(err => res.json(RES_DATA_FAIL('find categories fail', 400, err)))
};
// find by id
findCategoryByIdController = (req, res) => {
  categoryModel.findCategoryById(req.params.category_id)
    .then(data => res.json(RES_DATA_SUCCESS('find category by id success', 200, data)))
    .catch(err => res.json(RES_DATA_FAIL('find category by id fail', 400, err)))
};
// update
updateCategoryController = (req, res) => {
  let category = req.body;
  category.Category_Id = req.params.category_id
  categoryModel.updateCategory(category)
    .then(data => res.json(RES_DATA_SUCCESS('update category success', 201, data)))
    .catch(err => res.json(RES_DATA_FAIL('update category fail', 400, err)))
};

deleteCategoryController = (req, res) => {
  categoryModel.deleteCategory(req.params.category_id)
    .then(data => res.json(RES_DATA_SUCCESS('delete category success', 201, data)))
    .catch(err => res.json(RES_DATA_FAIL('delete category fail', 400, err)))
};

validateCategoryController = (req, res, next) => {
  categoryModel.validateCategory(req.params.category_id)
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
  createCategoryController,
  findCategoriesController,
  findCategoryByIdController,
  updateCategoryController,
  deleteCategoryController,
  validateCategoryController
}