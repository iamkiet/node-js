var db = require('./manageDB');

// create product_type
createProductType = (product_type) => {
  return new Promise((resolve, reject) => {
    db.executeQuery("insert into loaisanpham (TenLoaiSanPham) values (?)", product_type.TenLoaiSanPham,
      (err, data) => {
        if (err) reject(err)
        resolve(data)
      }
    );
  })
}
// read product_type
// find all
findAllProductType = () => {
  return new Promise((resolve, reject) => {
    db.executeQuery("select * from loaisanpham",
      (err, data) => {
        if (err) reject(err)
        resolve(data)
      }
    );
  })
}
// find by id
findProductTypeById = (id) => {
  return new Promise((resolve, reject) => {
    db.executeQuery("select * from loaisanpham where MaLoaiSanPham = ?", id,
      (err, data) => {
        if (err) reject(err)
        resolve(data)
      }
    );
  })
}
// update product_type
updateProductType = (product_type) => {
  return new Promise((resolve, reject) => {
    db.executeQuery("update loaisanpham set TenLoaiSanPham = ? where MaLoaiSanPham = ?",
    [product_type.TenLoaiSanPham, product_type.MaLoaiSanPham],
    (err, data) => {
      if (err) reject(err)
      resolve(data)
    });
  })
}
// delete
deleteProductType = (id) => {
  return new Promise((resolve, reject) => {
    db.executeQuery("update loaisanpham set BiXoa = 1 where MaLoaiSanPham = ?", id,
    (err, data) => {
      if (err) reject(err)
      resolve(data)
    })
  })
}
validateProductType = (id) => {
  return new Promise((resolve, reject) => {
    db.executeQuery("select * from loaisanpham where MaLoaiSanPham = ? and BiXoa = 0", id,
    (err, data) => {
      if (err) reject(err)
      resolve(data)
    })
  })
}

module.exports = {
  createProductType,
  findAllProductType,
  findProductTypeById,
  updateProductType,
  deleteProductType,
  validateProductType
}
