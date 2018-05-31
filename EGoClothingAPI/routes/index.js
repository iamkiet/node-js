let express = require('express');
let router = express.Router();

// SERVER STATIC FILE
router.get('/', (req, res) => {
  res.render('index', {
    message: 'wellcome egoclothing api'
  });
});

module.exports = router;
