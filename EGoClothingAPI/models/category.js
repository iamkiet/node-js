var db = require('./manageDB');

// create category
createCategory = (category) => {
  return new Promise((resolve, reject) => {
    db.executeQuery("insert into category (Category_Name) values (?)", category.Category_Name,
      (err, data) => {
        if (err) reject(err)
        resolve(data)
      }
    );
  })
}
// read category
// find all
findCategories = () => {
  return new Promise((resolve, reject) => {
    db.executeQuery("select * from category where Category_IsRemoved = 0",
      (err, data) => {
        if (err) reject(err)
        resolve(data)
      }
    );
  })
}
// find by id
findCategoryById = (id) => {
  return new Promise((resolve, reject) => {
    db.executeQuery("select * from category where Category_Id = ?", id,
      (err, data) => {
        if (err) reject(err)
        resolve(data)
      }
    );
  })
}
// update category
updateCategory = (category) => {
  return new Promise((resolve, reject) => {
    db.executeQuery("update category set Category_Name = ? where Category_Id = ?",
    [category.Category_Name, category.Category_Id],
    (err, data) => {
      if (err) reject(err)
      resolve(data)
    });
  })
}
// delete
deleteCategory = (id) => {
  return new Promise((resolve, reject) => {
    db.executeQuery("update category set Category_IsRemoved = 1 where Category_Id = ?", id,
    (err, data) => {
      if (err) reject(err)
      resolve(data)
    })
  })
}

module.exports = {
  createCategory,
  findCategories,
  findCategoryById,
  updateCategory,
  deleteCategory,
}
