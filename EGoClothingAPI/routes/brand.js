let express = require('express');
let router = express.Router();
let brand = require('../controllers/brand');
let mw = require('../controllers/middle_ware');

// GET ALL CATEGORY
router.get('/',
  brand.findBrandsController);

// GET CATEGORY BY ID
router.get('/:brand_id',
  brand.findBrandByIdController);

// CREATE CATEGORY
router.post('/',
  mw.verifyTokenController,
  mw.verifyAdminController,
  brand.createBrandController);

// UPDATE CATEGORY
router.put('/:brand_id',
  mw.verifyTokenController,
  mw.verifyAdminController,
  brand.updateBrandController);

// DELETE CATEGORY
router.delete('/:brand_id',
  mw.verifyTokenController,
  mw.verifyAdminController,
  brand.deleteBrandController);

module.exports = router;