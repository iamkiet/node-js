const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const app = express();

// Use port 3000 unless there exists a preconfigured port
const port = process.env.port || 3333;

// SUPPORT BODY READER
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var morgan       = require('morgan');
app.use(morgan('dev')); // log every request to the console

// ACCEPT CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header('Access-Control-Allow-Headers: X-Requested-With');
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// SUPPORT SERVER STATIC VIEW
app.set("view engine", "ejs");
app.use('/public', express.static(__dirname + '/public'));

app.use(cors());
app.use(fileUpload());
app.use(cookieParser());



// ROUTES
const index = require('./routes/index');
const account = require('./routes/account');
const product = require('./routes/product');
const order = require('./routes/order');
const category = require('./routes/category');
const brand = require('./routes/brand');
const comment = require('./routes/comment');
const business = require('./routes/business');

// MAP API
app.use('/', index);
app.use('/api/v1/account', account);
app.use('/api/v1/product', product);
app.use('/api/v1/order', order);
app.use('/api/v1/category', category);
app.use('/api/v1/brand', brand);
app.use('/api/v1/comment', comment);
app.use('/api/v1/business', business);

app.listen(port, () => {
  console.log(`EGoClothing API running ${port}!`);
})