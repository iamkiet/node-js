let accountModel = require('../models/account');
let jwt = require('jsonwebtoken');
let { RES_DATA_SUCCESS, RES_DATA_FAIL, INVALID, EXIST, NOT_EXIST, NOT_AVAILABLE } = require('./response');



createAccountController = (req, res) => {
    accountModel.createAccount(req.body.user)
        .then(data => res.json(RES_DATA_SUCCESS('create account success', 201, data)))
        .catch(err => res.json(RES_DATA_FAIL('create account fail', 400, err)))
};

findAccountsController = (req, res) => {
    accountModel.findAccounts()
        .then(data => res.json(RES_DATA_SUCCESS('find account success', 200, data)))
        .catch(err => res.json(RES_DATA_FAIL('find all account fail', 400, err)))
};

findAccountByIdController = (req, res) => {
    accountModel.findAccountById(req.params.account_id)
        .then(data => {
            data.length > 0 ? res.json(RES_DATA_SUCCESS('find account success', 200, data)) : res.json(RES_DATA_FAIL('find account by id fail', 400, err))
        })
        .catch(err => res.json(RES_DATA_FAIL('find account by id fail', 400, err)))
};

findAccountByUsernameController = (req, res) => {
    accountModel.findAccountByUsername(req.params.account_username)
        .then(data => res.json(RES_DATA_SUCCESS('find account success', 200, data)))
        .catch(err => res.json(RES_DATA_FAIL('find account by username fail', 400, err)))
}

updateAccountController = (req, res) => {
    let account = req.body;
    account.MaTaiKhoan = req.params.account_id;
    accountModel.updateAccount(account)
        .then(data => res.json(RES_DATA_SUCCESS('update account success', 201, data)))
        .catch(err => res.json(RES_DATA_FAIL('update account fail', 400, err)))
};

deleteAccountController = (req, res) => {
    let { account_id } = req.params;
    accountModel.deleteAccount(account_id)
        .then(data => res.json(RES_DATA_SUCCESS('delete account success', 201, data)))
        .catch(err => res.json(RES_DATA_FAIL('delete account fail', 400, err)))
};

loginAccountController = (req, res) => {
    let { user } = req;
    jwt.sign({ user }, 'secretkey', { expiresIn: '600s' }, (err, token) => {
        res.json({
            status: 201,
            message: 'login success',
            token
        });
    });
};

module.exports = {
    loginAccountController,
    createAccountController,
    findAccountByUsernameController,
    findAccountsController,
    findAccountByIdController,
    updateAccountController,
    deleteAccountController
}