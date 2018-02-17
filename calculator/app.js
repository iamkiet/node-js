var express = require("express");

//use the application off of express.
var app = express();

app.set('view engine', 'ejs')
app.use('/assets', express.static('assets'))

//define the route for "/"
app.get("/", function (req, res) {

  let firstNum = req.query.firstNum === undefined ? '' : parseInt(req.query.firstNum)
  let secondNum = req.query.secondNum === undefined ? '' : parseInt(req.query.secondNum)
  let typeCal = req.query.typeCal
  let result = 0

  // CHECK VALUE IMPUT TEXT

  switch(typeCal) {
    case 'sum':
      result = firstNum + secondNum
      break
    case 'sub':
      result = firstNum - secondNum
      break
    case 'mul':
      result = firstNum * secondNum
      break
    case 'div':
      result = firstNum / secondNum
      break
  }

  res.render('index', {
    firstNum: firstNum.toString(),
    secondNum: secondNum.toString(),
    result: result.toString(),
  })
});

//start the server
app.listen(3000, function(){
  console.log("Serving on port 3000")
});