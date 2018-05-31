let express = require('express');
let router = express.Router();

let account = require('../controllers/account');
let mw = require('../controllers/middle_ware');

// GET ALL ACCOUNT
router.get('/',
  mw.verifyTokenController,
  mw.verifyAdminController,
  account.findAccountsController),

// GET ACCOUNT BY USERNAME
router.get('/username/:account_username',
  account.findAccountByUsernameController);

// GET ACCOUNT BY ID
router.get('/:account_id',
  account.findAccountByIdController),
 
// LOGIN ACCOUNT
router.post('/login',
  mw.verifyAccountNotExistController,
  account.loginAccountController);

// CREATE ACCOUNT
router.post('/register',
  mw.verifyAccountExistController,
  account.createAccountController);

// UPDATE ACCOUNT
router.put('/:account_id',
  mw.verifyTokenController,
  mw.verifyAdminController,
  mw.verifyAccountIdNotExistController,
  account.updateAccountController),

// DELETE ACCOUNT
router.delete('/:account_id',
  mw.verifyTokenController,
  mw.verifyAdminController,
  mw.verifyAccountIdNotExistController,
  account.deleteAccountController)

module.exports = router;
