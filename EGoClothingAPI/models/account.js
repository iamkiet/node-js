var db = require('./manageDB');


createAccount = (account) => {
  return new Promise((resolve, reject) => {
    db.executeQuery("insert into taikhoan (TenDangNhap, MatKhau, TenHienThi, DiaChi, DienThoai, Email) values (?, ?, ?, ?, ?, ?)",
    [account.TenDangNhap, account.MatKhau,account.TenHienThi, account.DiaChi, account.DienThoai, account.Email],
    (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  })
}

findOneAccount = (id) => {
  return new Promise((resolve, reject) => {
    db.executeQuery("select * from taikhoan where MaTaiKhoan = ?", id,
    (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  })
}

findAllAccount = (callback) => {
  return new Promise((resolve, reject) => {
    db.executeQuery("select * from taikhoan",
    (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  })
  
}

updateAccount = (account) => {
  return new Promise((resolve, reject) => {
    db.executeQuery("update taikhoan set TenDangNhap = ?, MatKhau = ?, TenHienThi = ?, DiaChi = ?, DienThoai = ?, Email = ?, BiXoa = ?, MaLoaiTaiKhoan = 1 where MaTaiKhoan = ?",
    [account.TenDangNhap, account.MatKhau, account.TenHienThi, account.DiaChi, account.DienThoai, account.Email, account.BiXoa, account.MaTaiKhoan], 
    (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  })
}

deleteAccount = (id) => {
  return new Promise((resolve, reject) => {
    db.executeQuery("update taikhoan set BiXoa = 1 where MaTaiKhoan = ?", id,
    (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  })
}

module.exports = {
  createAccount,
  findOneAccount,
  findAllAccount,
  updateAccount,
  deleteAccount
}