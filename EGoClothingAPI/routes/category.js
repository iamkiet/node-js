var express = require('express');
var router = express.Router();
var category = require('../controllers/category');
var middleWare = require('../controllers/middle_ware');

router.get('/',
  category.findCategoriesController);

router.get('/:category_id',
  category.findCategoryByIdController);

router.post('/',
  middleWare.verifyTokenController,
  middleWare.verifyAdminController,
  category.createCategoryController);

router.put('/:category_id',
  middleWare.verifyTokenController,
  middleWare.verifyAdminController,
  category.updateCategoryController);

router.delete('/:category_id',
  middleWare.verifyTokenController,
  middleWare.verifyAdminController,
  category.deleteCategoryController);

module.exports = router;