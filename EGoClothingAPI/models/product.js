var db = require('./manageDB');
let mysql = require('mysql');

// exports.findOneProduct = function(id, callback) {
//   db.executeQuery("select * from taikhoan where LoaiSanPham = ", id, callback);
// }

exports.findProductByType = (type_name, limit, offset) => {
  if (limit === undefined) {
    limit = 5;
  }
  if (offset === undefined) {
    offset = 0;
  }
  return new Promise((resolve, reject) => {
    db.executeQuery(`SELECT * FROM sanpham join loaisanpham on sanpham.MaLoaiSanPham = loaisanpham.MaLoaiSanPham where TenLoaiSanPham = ? limit ? offset ?`, [type_name, parseInt(limit), parseInt(offset)],
      (err, data) => {
        if (err) { reject(err) }
        resolve(data)
    })
  })
}

exports.findProductByCompany = (company_name, limit, offset) => {
  if (limit === undefined) {
    limit = 5;
  }
  if (offset === undefined) {
    offset = 0;
  }
  return new Promise((resolve, reject) => {
    db.executeQuery(`SELECT * FROM sanpham join hangsanxuat on sanpham.MaHangSanXuat = hangsanxuat.MaHangSanXuat where TenHangSanXuat = ? limit ? offset ?`, [company_name, parseInt(limit), parseInt(offset)],
      (err, data) => {
        if (err) { reject(err) }
        resolve(data)
    })
  })
}

exports.findProductByName = (TenSanPham, callback) => {
  return new Promise((resolve, reject) => {
    db.executeQuery("SELECT * FROM sanpham where TenSanPham = ?", TenSanPham, (err, data) => {
      if (err) reject(err)
      resolve(data)
    })
  })
  
}

exports.findAllProduct = function (callback) {
  db.executeQuery("select * from sanpham", callback);
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