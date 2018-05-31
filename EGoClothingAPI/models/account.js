var db = require('./manageDB');


createAccount = (account) => {
  return new Promise((resolve, reject) => {
    db.executeQuery("insert into account (Username, Password, Name, Address, PhoneNumber, Email) values (?, ?, ?, ?, ?, ?)",
    [account.Username, account.Password,account.Name, account.Address, account.PhoneNumber, account.Email],
    (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  })
}

findAccountById = (id) => {
  return new Promise((resolve, reject) => {
    db.executeQuery("select * from account where Id = ?", id,
    (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  })
}


findAccountByUsername = (username) => {
  return new Promise((resolve, reject) => {
    db.executeQuery("select * from account where Username = ?", [username],
    (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  })
}



findAccounts = (callback) => {
  return new Promise((resolve, reject) => {
    db.executeQuery("select * from account where IsRemoved = 0",
    (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  })
  
}

updateAccount = (account) => {
  return new Promise((resolve, reject) => {
    db.executeQuery("update account set Username = ?, Password = ?, Name = ?, Address = ?, PhoneNumber = ?, Email = ?, IsRemoved = ?, Id = 1 where Id = ?",
    [account.Username, account.Password, account.Name, account.Address, account.PhoneNumber, account.Email, account.IsRemoved, account.Id], 
    (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  })
}

deleteAccount = (id) => {
  return new Promise((resolve, reject) => {
    db.executeQuery("update account set IsRemoved = 1 where Id = ?", id,
    (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  })
}



module.exports = {
  createAccount,
  findAccountById,
  findAccountByUsername,
  findAccounts,
  updateAccount,
  deleteAccount,
}