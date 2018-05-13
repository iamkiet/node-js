var express = require('express');
var router = express.Router();
var account = require('../controllers/account');

  // Create a new Note
router.post('/', account.createAccount),

// Retrieve all account
router.get('/', account.findAllAccount),

// Retrieve a single Note with noteId
router.get('/:accountId', account.findOneAccount),

// Update a Note with celebrityId
router.put('/:accountId', account.updateAccount),

// Delete a Note with celebrityId
router.delete('/:accountId', account.validateAccount, account.deleteAccount)

module.exports = router;
