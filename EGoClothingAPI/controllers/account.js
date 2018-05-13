var accountModel = require('../models/account');
let type_response = require('./type_response');

exports.createAccount = function (req, res) {
    // Create and Save a new celebrity
    accountModel.createAccount(req.body, function (err, data) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.status(201).send(data);
    })
};

exports.findAllAccount = function (req, res) {
    // Retrieve and return all notes from the database.
    accountModel.findAllAccount(function (err, data) {
            if (err) {
                res.status(400).send(err);
                return;
            }
            res.send(data);
        }
    );
};

exports.findOneAccount = function (req, res) {
    // Find a single note with a noteId
    accountModel.findOneAccount(req.params.accountId, (err, data) => {
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(data);
    });
};

exports.updateAccount = function (req, res) {
    // Update a note identified by the noteId in the request
    let { accountId } = req.params;
    accountModel.updateAccount(accountId, req.body, (err, data) => {
        if(err){
            res.status(400).send(err);
            return
        }
        res.send(data)
    })
};

exports.deleteAccount = function (req, res) {
    let { MaTaiKhoan } = req.account[0];
    // Delete a note with the specified noteId in the request
    accountModel.deleteAccount(MaTaiKhoan, (err, data) => {
        if(err){
            res.status(400).send(err);
            return
        }
        res.send({
            data: type_response.responseSuccess("DELETE")
        })
    })
};

exports.validateAccount = (req, res, next) => {
    let { accountId } = req.params;
    accountModel.findOneAccount(accountId, (err, data) => {
        if (err) {
            res.status(400).send(err);
            return;
        }
        if (data.length < 1) {
            res.send({
                "STATUS": 404,
                "MESSAGE": "ACCOUNT NOT FOUND"
            })
        } else {
            req.account = data
            next();
        }
    });
}