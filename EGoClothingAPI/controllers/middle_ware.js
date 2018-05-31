let jwt = require('jsonwebtoken');
let { RES_DATA_SUCCESS, RES_DATA_FAIL, INVALID, EXIST, NOT_EXIST, NOT_AVAILABLE } = require('./response');
let accountModel = require('../models/account');


// MIDDLE_WARE: Support Register Account
verifyAccountIdNotExistController = (req, res, next) => {
    let id = req.params.account_id;
    accountModel.findAccountById(id)
        .then(data => data[0])
        .then(data => {
            if (!data) {
                res.json(NOT_EXIST('account'))
            }
            if (parseInt(data.IsRemoved) !== 0) {
                res.json(NOT_AVAILABLE('account'))
            }
            else {
                // CREATE PAYLOAD
                let user = {
                    id: data.Id,
                    username: data.Username,
                    permissions: data.Account_Type_Id
                }
                next();
            }
        })
        .catch(err => res.json(RES_DATA_FAIL('find account fail', 400, err)))
}
// MIDDLE_WARE: Support Register Account
verifyAccountExistController = (req, res, next) => {
    let { Username } = req.body.user;
    
    accountModel.findAccountByUsername(Username)
        .then(data => {
            if (data.length > 0) {
                res.json(EXIST('username'))
                return
            }
            // uiser not existed
            next()
        })
        .catch(err => res.json(RES_DATA_FAIL('verify username fail', 404, err)))
        
}
// MIDDLE_WARE: Support Login Account
verifyAccountNotExistController = (req, res, next) => {
    let { username, password } = req.body.user;
    
    accountModel.findAccountByUsername(username)
        .then(data => data[0])
        .then(data => {
            if (!data) {
                res.json(NOT_EXIST('account'))
                return
            }
            if (data.Password !== password) {
                res.json(INVALID('password'))
                return
            }
            // CREATE PAYLOAD
            let user = {
                id: data.Id,
                username: data.Username,
                permissions: data.Account_Type_Id
            }
            // SEND DATA THROUGH OUT MIDDLE WARE
            req.user = user;
            next();
        })
        .catch(err => res.json(RES_DATA_FAIL('find account fail', 400, err)))

}
// MIDDLE_WARE: Support CRUD Account
verifyAdminController = (req, res, next) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if (err) {
            res.json(RES_DATA_FAIL('verify auth data fail', 401, err.message))
            return
        }
        if (parseInt(authData.user.permissions) !== 2) {
            res.json(RES_DATA_FAIL('verify auth data fail', 403, 'not enough permissions'))
            return
        }
        next()
    })

}

// MIDDLE_WARE: Support CRUD Account
verifyOwnerController = (req, res, next) => {
    let usernameParams = req.params.username;
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if (err) {
            res.json(RES_DATA_FAIL('verify auth data fail', 401, err.message))
            return
        }
        let { id, username, permissions } = authData.user;
        // Not admin
        if (permissions !== 2) {
            // Not owner acccount
            if (username !== usernameParams) {
                res.json(RES_DATA_FAIL('verify auth data fail', 403, 'not engough permissions'))
                return    
            }
        }
        req.user = authData.user;
        next()
    })

}

// MIDDLE_WARE: Support validate token Account
verifyTokenController = (req, res, next) => {
    // Get auth header value
    const bearerHeader = req.headers['authorization'];
    // Check if bearer is undefined
    if (typeof (bearerHeader) !== 'undefined') {
        // Split at the space
        const bearer = bearerHeader.split(' ');
        // Get token from array
        const bearerToken = bearer[1];
        // Set the token
        req.token = bearerToken;
        // Next middleware
        next();
    } else {

        res.json(RES_DATA_FAIL('verify token fail', 403, 'forbidden'))
    }
}


module.exports = {
    verifyAccountIdNotExistController,
    verifyTokenController,
    verifyAdminController,
    verifyOwnerController,
    verifyAccountExistController,
    verifyAccountNotExistController
}
