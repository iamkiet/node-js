var express = require('express');
var router = express.Router();
var account = require('../controllers/account');

  // Create a new Note
router.post('/', account.createAccountController),

// Retrieve all account
router.get('/', account.findAllAccountController),

// Retrieve a single Note with noteId
router.get('/:account_id', account.findOneAccountController),

// Update a Note with celebrityId
router.put('/:account_id', account.updateAccountController),

// Delete a Note with celebrityId
router.delete('/:account_id', account.deleteAccountController)

module.exports = router;
