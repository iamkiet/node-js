var commentModel = require('../models/comment');
let { RES_DATA_SUCCESS, RES_DATA_FAIL, INVALID, EXIST, NOT_EXIST, NOT_AVAILABLE } = require('./response');

// create comment
createCommentController = (req, res) => {
  let comment = req.body;
  
  commentModel.createComment(comment)
    .then(data => res.json(RES_DATA_SUCCESS('create comment success', 201, data)))
    .catch(err => res.json(RES_DATA_FAIL('create comment fail', 400, err)))
};

// find all
findCommentsController = (req, res) => {
  commentModel.findComments()
    .then(data => res.json(RES_DATA_SUCCESS('find comments success', 200, data)))
    .catch(err => res.json(RES_DATA_FAIL('find comments fail', 400, err)))
};
// find by id
findCommentByIdController = (req, res) => {
  commentModel.findCommentById(req.params.comment_id)
    .then(data => {
      if (data.length < 1) {
        res.json(NOT_EXIST('comment'))
        return
      }
      res.json(RES_DATA_SUCCESS('find comment by id success', 200, data))
    })
    .catch(err => res.json(RES_DATA_FAIL('find comment by id fail', 400, err)))
};
// update
updateCommentController = (req, res) => {
  let comment = req.body;
  comment.Comment_Id = req.params.comment_id
  commentModel.updateComment(comment)
    .then(data => res.json(RES_DATA_SUCCESS('update comment success', 201, data)))
    .catch(err => res.json(RES_DATA_FAIL('update comment fail', 400, err)))
};

deleteCommentController = (req, res) => {
  commentModel.deleteComment(req.params.comment_id)
    .then(data => res.json(RES_DATA_SUCCESS('delete comment success', 201, data)))
    .catch(err => res.json(RES_DATA_FAIL('delete comment fail', 400, err)))
};

module.exports = {
  createCommentController,
  findCommentsController,
  findCommentByIdController,
  updateCommentController,
  deleteCommentController,
}