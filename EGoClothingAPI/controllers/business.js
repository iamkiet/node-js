let { RES_DATA_FAIL } = require('./response');

let path = require('path');
let appDir = path.dirname(require.main.filename);

// upload image
uploadImageController = (req, res) => {
  let imageFile = req.files.file;
  
  imageFile.mv(`${appDir}/public/imgs/${req.body.filename}.jpg`, (err) => {
    if (err) {
      return res.json(RES_DATA_FAIL(500, 'upload image fail', 'upload image fail'))
    }
    res.json({
      file: `public/imgs/${req.body.filename}.jpg`
    });
  });
};

module.exports = {
  uploadImageController
}