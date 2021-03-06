let express = require('express');
let router = express.Router();
let category = require('../controllers/category');
let mw = require('../controllers/middle_ware');

// GET ALL CATEGORY
router.get('/',
  category.findCategoriesController);

// GET CATEGORY BY ID
router.get('/:category_id',
  category.findCategoryByIdController);

// CREATE CATEGORY
router.post('/',
  mw.verifyTokenController,
  mw.verifyAdminController,
  category.createCategoryController);

// UPDATE CATEGORY
router.put('/:category_id',
  mw.verifyTokenController,
  mw.verifyAdminController,
  category.updateCategoryController);

// DELETE CATEGORY
router.delete('/:category_id',
  mw.verifyTokenController,
  mw.verifyAdminController,
  category.deleteCategoryController);

module.exports = router;