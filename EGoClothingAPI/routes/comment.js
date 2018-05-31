let express = require('express');
let router = express.Router();
let comment = require('../controllers/comment');
let mw = require('../controllers/middle_ware');

// GET ALL CATEGORY
router.get('/',
  comment.findCommentsController);

// GET CATEGORY BY ID
router.get('/:comment_id',
  comment.findCommentByIdController);

// CREATE CATEGORY
router.post('/',
  mw.verifyTokenController,
  mw.verifyOwnerController,
  comment.createCommentController);

// UPDATE CATEGORY
router.put('/:comment_id',
  mw.verifyTokenController,
  mw.verifyOwnerController,
  comment.updateCommentController);

// DELETE CATEGORY
router.delete('/:comment_id',
  mw.verifyTokenController,
  mw.verifyOwnerController,
  comment.deleteCommentController);

module.exports = router;