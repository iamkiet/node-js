var db = require('./manageDB');

createOrder = (order) => {
  return new Promise((resolve, reject) => {
    db.executeQuery("insert into user_order (Order_Id, Total, Account_Id) values (?, ?, ?)",
    [order.Order_Id, order.Total, order.Account_Id],
    (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  })
}

findOrderById = (id) => {
  return new Promise((resolve, reject) => {
    db.executeQuery("select * from user_order where Order_Id = ?", id,
    (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  })
}

findOrderByAccountId = (accountId) => {
  return new Promise((resolve, reject) => {
    db.executeQuery("select * from user_order where Account_Id = ?", [accountId],
    (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  })
}

findOrderByAccountUsername = (username) => {
  return new Promise((resolve, reject) => {
    db.executeQuery("select * from user_order as uo, account as ac where uo.Account_Id = ac.Id and ac.Username = ? order by uo.Date desc", [username],
    (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  })
}

findOrders = () => {
  return new Promise((resolve, reject) => {
    db.executeQuery("select * from user_order",
    (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  })
  
}

updateOrder = (order) => {
  return new Promise((resolve, reject) => {
    db.executeQuery("update user_order set Total = ?, Status_Id = ? where Account_Id = ? and Order_Id = ?",
    [order.Total, order.Status_Id, order.Account_Id, order.Order_Id], 
    (err, data) => {
      if (err) reject(err);
      if (data.affectedRows !== 1) reject('order not found');
      resolve(data);
    });
  })
}

deleteOrder = (order) => {
  return new Promise((resolve, reject) => {
    db.executeQuery("update user_order set Status_Id = 4 where Account_Id = ? and Order_Id = ?", [order.Account_Id, order.Order_Id],
    (err, data) => {
      if (err) reject(err);
      if (data.affectedRows !== 1) reject('order not found');
      resolve(data);
    });
  })
}



module.exports = {
  createOrder,
  findOrderById,
  findOrderByAccountId,
  findOrderByAccountUsername,
  findOrders,
  updateOrder,
  deleteOrder
}