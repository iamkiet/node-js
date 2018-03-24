var db = require('./manageDB');

exports.findOne = function(id, callback) {
  db.executeQuery("select * from celebrities where id = ?", id, callback);
}

exports.findAll = function (callback) {
  db.executeQuery("select * from celebrities", callback);
}

exports.create = function(celebrity, callback){
  db.executeQuery("insert into celebrities (name, image_url, description) values (?, ?, ?)", [celebrity.name, celebrity.image_url, celebrity.description], callback);
}

exports.update = function(id, celebrity, callback){
  db.executeQuery("update celebrities set image_url = ?, name = ?, description = ? where id = ?", [celebrity.image_url, celebrity.name, celebrity.description, id], callback);
}

exports.delete = (id, callback) => {
  db.executeQuery("delete from celebrities where id = ?", id, callback);
}