var accountModel = require('../models/account');
let response = require('./response');

createAccountController = (req, res) => {
    accountModel.createAccount(req.body)
    .then(data => res.json(response.RES_DEFAULT('CREATE_ACCOUNT', 201, 'SUCESS', data)))
    .catch(err => res.json(response.RES_DEFAULT('CREATE_ACCOUNT', 400, 'FAIL', err)))
};

findAllAccountController = (req, res) => {
    // Retrieve and return all notes from the database.
    accountModel.findAllAccount()
    .then(data => res.json(response.RES_DEFAULT('FIND_ACCOUNT', 201, 'SUCESS', data)))
    .catch(err => res.json(response.RES_DEFAULT('FIND_ACCOUNT', 400, 'FAIL', err)))
};

findOneAccountController = (req, res) => {
    accountModel.findOneAccount(req.params.account_id)
    .then(data => {
        data.length > 0 ? res.json(response.RES_DEFAULT('FIND_ACCOUNT', 201, 'SUCESS', data)) : res.json(response.RES_DEFAULT('FIND_ACCOUNT', 404, 'FAIL', data))
    })
    .catch(err => res.json(response.RES_DEFAULT('FIND_ACCOUNT', 400, 'FAIL', err)))
};

updateAccountController = (req, res) => {
    let account = req.body;
    account.MaTaiKhoan = req.params.account_id;
    accountModel.updateAccount(account)
    .then(data => res.json(response.RES_DEFAULT('UPDATE_ACCOUNT', 201, 'SUCESS', data)))
    .catch(err => res.json(response.RES_DEFAULT('UPDATE_ACCOUNT', 400, 'FAIL', err)))
};

deleteAccountController = (req, res) => {
    let { account_id } = req.params;
    accountModel.deleteAccount(account_id)
    .then(data => res.json(response.RES_DEFAULT('DELETE_ACCOUNT', 201, 'SUCESS', data)))
    .catch(err => res.json(response.RES_DEFAULT('DELETE_ACCOUNT', 400, 'FAIL', err)))
};

module.exports = {
    createAccountController,
    findAllAccountController,
    findOneAccountController,
    updateAccountController,
    deleteAccountController
}