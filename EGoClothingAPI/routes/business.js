let express = require('express');
let router = express.Router();
let business = require('../controllers/business');

router.post('/uploadImage', business.uploadImageController);

module.exports = router;