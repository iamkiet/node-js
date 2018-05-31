var db = require('./manageDB');

// create comment
createComment = (comment) => {
  return new Promise((resolve, reject) => {
    db.executeQuery("insert into comment (Content, Account_Id, Product_Id) values (?, ?, ?)", [comment.Content, comment.Account_Id, comment.Product_Id],
      (err, data) => {
        if (err) reject(err)
        resolve(data)
      }
    );
  })
}

// read comment
findComments = () => {
  return new Promise((resolve, reject) => {
    db.executeQuery("select * from comment where Comment_IsRemoved = 0",
      (err, data) => {
        if (err) reject(err)
        resolve(data)
      }
    );
  })
}
// find by id
findCommentById = (id) => {
  return new Promise((resolve, reject) => {
    db.executeQuery("select * from comment where Comment_Id = ?", id,
      (err, data) => {
        if (err) reject(err)
        resolve(data)
      }
    );
  })
}

// update comment
updateComment = (comment) => {
  return new Promise((resolve, reject) => {
    db.executeQuery("update comment set Content = ? where Comment_Id = ?",
    [comment.Content, comment.Comment_Id],
    (err, data) => {
      if (err) reject(err)
      resolve(data)
    });
  })
}

// delete
deleteComment = (id) => {
  return new Promise((resolve, reject) => {
    db.executeQuery("update comment set Comment_IsRemoved = 1 where Comment_Id = ?", id,
    (err, data) => {
      if (err) reject(err)
      resolve(data)
    })
  })
}

module.exports = {
  createComment,
  findComments,
  findCommentById,
  updateComment,
  deleteComment,
}
