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
const celebrities = require('./routes/celebrities');

app.set("view engine", "ejs");

app.use('/static', express.static(__dirname + '/public/assets'));

app.use('', index);
app.use('/api', celebrities);

app.listen(3001, () => {
  console.log("Server is running on port 3001!");
})