var db = require('./manageDB');

// create product
createProduct = (product) => {
  return new Promise((resolve, reject) => {
    db.executeQuery("insert into sanpham (TenSanPham, HinhURL, GiaSanPham, MoTa, MaLoaiSanPham, MaHangSanXuat) values (?, ?, ?, ?, ?, ?)",
      [product.TenSanPham, product.HinhURL, product.GiaSanPham, product.MoTa, product.MaLoaiSanPham, product.MaHangSanXuat],
      (err, data) => {
        if (err) reject(err)
        resolve(data)
      }
    );
  })
}

// read product
// find all
findAllProduct = () => {
  return new Promise((resolve, reject) => {
    db.executeQuery("select * from sanpham",
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
    db.executeQuery("select * from sanpham where MaSanPham = ?", id,
      (err, data) => {
        if (err) reject(err)
        resolve(data)
      }
    );
  })
}
// find by product_type
// find by product_name
// find by company_name

// update product
updateProduct = (product) => {
  return new Promise((resolve, reject) => {
    db.executeQuery("update sanpham set TenSanPham = ?, HinhURL = ?, GiaSanPham = ?, MoTa = ?, MaLoaiSanPham = ?, MaHangSanXuat = ?, BiXoa = ? where MaSanPham = ?",
    [product.TenSanPham, product.HinhURL, product.GiaSanPham, product.MoTa, product.MaLoaiSanPham, product.MaHangSanXuat, product.BiXoa, product.MaSanPham],
    (err, data) => {
      if (err) reject(err)
      resolve(data)
    });
  })
}
// delete

deleteProduct = (id) => {
  return new Promise((resolve, reject) => {
    db.executeQuery("update sanpham set BiXoa = 1 where MaSanPham = ?", id,
    (err, data) => {
      if (err) reject(err)
      resolve(data)
    })
  })
  
}

validateProduct = (id) => {
  return new Promise((resolve, reject) => {
    db.executeQuery("select * from sanpham where MaSanPham = ? and BiXoa = 0", id,
    (err, data) => {
      if (err) reject(err)
      resolve(data)
    })
  })
}

module.exports = {
  createProduct,
  findAllProduct,
  findProductById,
  updateProduct,
  deleteProduct,
  validateProduct
}









// exports.findOneProduct = function(id, callback) {
//   db.executeQuery("select * from taikhoan where LoaiSanPham = ", id, callback);
// }


// exports.findProductByType = (type_name, limit, offset) => {
//   if (limit === undefined) {
//     limit = 5;
//   }
//   if (offset === undefined) {
//     offset = 0;
//   }
//   return new Promise((resolve, reject) => {
//     db.executeQuery(`SELECT * FROM sanpham join loaisanpham on sanpham.MaLoaiSanPham = loaisanpham.MaLoaiSanPham where TenLoaiSanPham = ? limit ? offset ?`, [type_name, parseInt(limit), parseInt(offset)],
//       (err, data) => {
//         if (err) { reject(err) }
//         resolve(data)
//     })
//   })
// }

// exports.findProductByCompany = (company_name, limit, offset) => {
//   if (limit === undefined) {
//     limit = 5;
//   }
//   if (offset === undefined) {
//     offset = 0;
//   }
//   return new Promise((resolve, reject) => {
//     db.executeQuery(`SELECT * FROM sanpham join hangsanxuat on sanpham.MaHangSanXuat = hangsanxuat.MaHangSanXuat where TenHangSanXuat = ? limit ? offset ?`, [company_name, parseInt(limit), parseInt(offset)],
//       (err, data) => {
//         if (err) { reject(err) }
//         resolve(data)
//     })
//   })
// }

exports.findProductByName = (TenSanPham, callback) => {
  return new Promise((resolve, reject) => {
    db.executeQuery("SELECT * FROM sanpham where TenSanPham = ?", TenSanPham, (err, data) => {
      if (err) reject(err)
      resolve(data)
    })
  })

}

// exports.createProduct = function(Product, callback){
//   db.executeQuery("insert into taikhoan (TenDangNhap, MatKhau, TenHienThi, DiaChi, DienThoai, Email) values (?, ?, ?, ?, ?, ?)",
//                   [
//                     Product.TenDangNhap,
//                     Product.MatKhau,
//                     Product.TenHienThi, 
//                     Product.DiaChi, 
//                     Product.DienThoai, 
//                     Product.Email], 
//                     callback
//                   );
// }

// exports.updateProduct = function(id, Product, callback){
//   db.executeQuery("update taikhoan set TenDangNhap = ?, MatKhau = ?, TenHienThi = ?, DiaChi = ?, DienThoai = ?, Email = ?, BiXoa = ?, MaLoaiTaiKhoan = 1 where MaTaiKhoan = ?",
//                   [
//                     Product.TenDangNhap,
//                     Product.MatKhau,
//                     Product.TenHienThi,
//                     Product.DiaChi,
//                     Product.DienThoai,
//                     Product.Email,
//                     Product.BiXoa,
//                     id  
//                   ], callback);
// }

// exports.deleteProduct = (id, callback) => {
//   db.executeQuery("update taikhoan set BiXoa = 1 where MaTaiKhoan = ?", id, callback);
// }