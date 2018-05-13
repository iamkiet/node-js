const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Headers: X-Requested-With');
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

const index = require('./routes/index');
const account = require('./routes/account');
const product = require('./routes/product');

// app.set("view engine", "ejs");

// app.use('/static', express.static(__dirname + '/public/assets'));

app.use('/api/v1', index);
app.use('/api/v1/account', account);
app.use('/api/v1/product', product);

app.listen(3333, () => {
  console.log("Server is running on port 3333!");
})