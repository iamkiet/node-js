var db = require('./manageDB');

// create product
createProduct = (product) => {
  return new Promise((resolve, reject) => {
    db.executeQuery("insert into product (Name, Img_URL, Price, Description, Category_Id, Brand_Id) values (?, ?, ?, ?, ?, ?)",
      [product.Name, product.Img_URL, product.Price, product.Description, product.Category_Id, product.Brand_Id],
      (err, data) => {
        if (err) reject(err)
        resolve(data)
      }
    );
  })
}

// read product
// find all
findAllProduct = (querySearch) => {
  if (querySearch.limit && querySearch.offset) {
    let limit = parseInt(querySearch.limit)
    let offset = parseInt(querySearch.offset)
    return new Promise((resolve, reject) => {
      db.executeQuery("select * from product where IsRemoved = 0 limit ? offset ?",
      [limit, offset], (err, data) => {
          if (err) reject(err)
          resolve(data)
        }
      );
    })
  }
  return new Promise((resolve, reject) => {
    db.executeQuery("select * from product where IsRemoved = 0",
      (err, data) => {
        if (err) reject(err)
        resolve(data)
      }
    );
  })
}
// find by id
findProductById = (id) => {
  return new Promise((resolve, reject) => {
    db.executeQuery("select * from product where Id = ?", id,
      (err, data) => {
        if (err) reject(err)
        resolve(data)
      }
    );
  })
}


findProductByNewest = () => {
  return new Promise((resolve, reject) => {
    db.executeQuery("select * from product where IsRemoved = 0 order by Import_Date desc limit 9 offset 0",
      (err, data) => {
        if (err) reject(err)
        resolve(data)
      }
    );
  })
}

findProductByFeature = () => {
  return new Promise((resolve, reject) => {
    db.executeQuery("select * from product where IsRemoved = 0 order by InStock desc limit 9 offset 0",
      (err, data) => {
        if (err) reject(err)
        resolve(data)
      }
    );
  })
}

// update product
updateProduct = (product) => {
  return new Promise((resolve, reject) => {
    db.executeQuery("update product set Name = ?, Img_URL = ?, Price = ?, InStock = ?, Description = ?, Category_Id = ?, Brand_Id = ? where Id = ?",
    [product.Name, product.Img_URL, product.Price, product.InStock, product.Description, product.Category_Id, product.Brand_Id, product.Id],
    (err, data) => {
      if (err) reject(err)
      resolve(data)
    });
  })
}
// delete

deleteProduct = (id) => {
  return new Promise((resolve, reject) => {
    db.executeQuery("update product set IsRemoved = 1 where Id = ?", id,
    (err, data) => {
      if (err) reject(err)
      resolve(data)
    })
  })
  
}

module.exports = {
  findAllProduct,
  findProductById,
  findProductByNewest,
  findProductByFeature,

  createProduct,
  updateProduct,
  deleteProduct
}



