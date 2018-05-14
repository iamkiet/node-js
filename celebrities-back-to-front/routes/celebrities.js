var express = require('express');
var router = express.Router();

var celebrities = require('../controllers/celebrities');

// Create a new Note
router.post('/', celebrities.create);

// Retrieve all celebrities
router.get('/', celebrities.findAll);

// Retrieve a single Note with noteId
router.get('/:celebrityId', celebrities.findOne);

// Update a Note with celebrityId
router.put('/:celebrityId', celebrities.update);

// Delete a Note with celebrityId
router.delete('/:celebrityId', celebrities.delete);

module.exports = router;
