var express = require('express');
var router = express.Router();
var account = require('../controllers/account');
let middleWare = require('../controllers/middle_ware');

router.post('/register', middleWare.verifyAccountExistController, account.createAccountController);

// login sucer
router.post('/login', middleWare.verifyAccountNotExistController, account.loginAccountController);

router.post('/', middleWare.verifyTokenController, middleWare.verifyAdminController, account.createAccountController),

// Retrieve all account
router.get('/', middleWare.verifyTokenController, middleWare.verifyAdminController, account.findAllAccountController),

router.get('/username/:account_username', account.findAccountByUsernameController);

// Retrieve a single Note with noteId
router.get('/:account_id', account.findOneAccountController),

// Update a Note with celebrityId
router.put('/:account_id', middleWare.verifyTokenController, middleWare.verifyAdminController, middleWare.verifyAccountIdNotExistController, account.updateAccountController),

// Delete a Note with celebrityId
router.delete('/:account_id', middleWare.verifyTokenController, middleWare.verifyAdminController, middleWare.verifyAccountIdNotExistController, account.deleteAccountController)

module.exports = router;
