let orderModel = require('../models/order');
let { RES_DATA_SUCCESS, RES_DATA_FAIL, INVALID, EXIST, NOT_EXIST, NOT_AVAILABLE } = require('./response');

createOrderController = (req, res) => {
    let order = req.body;
    var now = new Date();
    let day = now.getDate() < 10 ? '0' + now.getDate() : now.getDate();
    let month = now.getMonth() + 1 < 10 ? '0' + (now.getMonth() + 1) : now.getMonth() + 1;
    let year = now.getFullYear();

    orderModel.findOrderByAccountUsername(req.params.username)
        .then(data => data[0])
        .then(data => {
            // 0801201801
            // if lated date order id not equal cur day, lated = 1, else . . .
            let temp = data.Date.getDate() !== day ? 1 : parseInt((data.Order_Id).substring(8, 10)) + 1
            let latedOrderId = temp < 10 ? '0' + temp : temp;
            order.Order_Id = day + month + year + latedOrderId;
            order.Account_Id = data.Id;
            orderModel.createOrder(order)
            .then(data => res.json(RES_DATA_SUCCESS('create order success', 201, data)))
            .catch(err => res.json(RES_DATA_FAIL('create order fail', 400, err)))
        })
        .catch(err => res.json(RES_DATA_FAIL('find order by username fail', 400, err)))
};

findOrdersController = (req, res) => {
    orderModel.findOrders()
        .then(data => res.json(RES_DATA_SUCCESS('find order success', 200, data)))
        .catch(err => res.json(RES_DATA_FAIL('find all order fail', 400, err)))
};

findOrderByAccountIdController = (req, res) => {
    orderModel.findOrderByAccountId(req.account_id)
        .then(data => res.json(RES_DATA_SUCCESS('find order success', 200, data)))
        .catch(err => res.json(RES_DATA_FAIL('find order by id fail', 400, err)))
};

findOrderByAccountUsernameController = (req, res) => {
    orderModel.findOrderByAccountUsername(req.params.username)
        .then(data => res.json(RES_DATA_SUCCESS('find order success', 200, data)))
        .catch(err => res.json(RES_DATA_FAIL('find order by username fail', 400, err)))
};

updateOrderController = (req, res) => {
    let order = req.body;
    if (!order.Order_Id) {
        res.json(RES_DATA_FAIL('bad quest', 400, 'missing Order_Id'))
        return
    }
    orderModel.findOrderByAccountUsername(req.params.username)
        .then(data => {
            order.Account_Id = data[0].Id
            orderModel.updateOrder(order)
                .then(data => {
                    res.json(RES_DATA_SUCCESS('update order success', 201, data))
                })
                .catch(err => res.json(RES_DATA_FAIL('update order fail', 400, err)))
        })
        .catch(err => res.json(RES_DATA_FAIL('find order fail', 400, err)))
};

deleteOrderController = (req, res) => {
    let order = req.body;
    if (!order.Order_Id) {
        res.json(RES_DATA_FAIL('bad request', 400, 'missing Order_Id'))
        return
    }
    orderModel.findOrderByAccountUsername(req.params.username)
    .then(data => data[0])
    .then(data => {
        order.Account_Id = data.Id
        orderModel.deleteOrder(order)
            .then(data => res.json(RES_DATA_SUCCESS('delete order success', 201, data)))
            .catch(err => res.json(RES_DATA_FAIL('delete order fail', 400, err)))
    })
    .catch(err => res.json(RES_DATA_FAIL('find order fail', 400, err)))
};



module.exports = {
  createOrderController,
  findOrdersController,
  findOrderByAccountIdController,
  findOrderByAccountUsernameController,
  updateOrderController,
  deleteOrderController
}