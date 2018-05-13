var db = require('./manageDB');

exports.findOneAccount = function(id, callback) {
  db.executeQuery("select * from taikhoan where MaTaiKhoan = ?", id, callback);
}

exports.findAllAccount = function (callback) {
  db.executeQuery("select * from taikhoan", callback);
}

exports.createAccount = function(account, callback){
  db.executeQuery("insert into taikhoan (TenDangNhap, MatKhau, TenHienThi, DiaChi, DienThoai, Email) values (?, ?, ?, ?, ?, ?)",
                  [
                    account.TenDangNhap,
                    account.MatKhau,
                    account.TenHienThi, 
                    account.DiaChi, 
                    account.DienThoai, 
                    account.Email], 
                    callback
                  );
}

exports.updateAccount = function(id, account, callback){
  db.executeQuery("update taikhoan set TenDangNhap = ?, MatKhau = ?, TenHienThi = ?, DiaChi = ?, DienThoai = ?, Email = ?, BiXoa = ?, MaLoaiTaiKhoan = 1 where MaTaiKhoan = ?",
                  [
                    account.TenDangNhap,
                    account.MatKhau,
                    account.TenHienThi,
                    account.DiaChi,
                    account.DienThoai,
                    account.Email,
                    account.BiXoa,
                    id  
                  ], callback);
}

exports.deleteAccount = (id, callback) => {
  db.executeQuery("update taikhoan set BiXoa = 1 where MaTaiKhoan = ?", id, callback);
}