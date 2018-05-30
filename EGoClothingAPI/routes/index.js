var express = require('express');
var router = express.Router();

const account = require('../routes/account');


/* GET home page. */
router.get('/', function(req, res) {
  res.json({
    message: 'index'
  })
});

module.exports = router;
