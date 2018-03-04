const express = require('express');  
const cors = require('cors');
const bodyParser = require('body-parser');
const ceil = require('math-ceil');

const app = express();
app.use(cors())
app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({ extended: false }));

// -- 123.12 => 123.2
function roundUp(num, precision) {
  precision = Math.pow(10, precision)
  return Math.ceil(num * precision) / precision
}

app.get('/api/tinh', function(req, res) {
  // const a = 1;
  const firstNum = parseInt(req.query.firstNum);
  const secondNum = parseInt(req.query.secondNum);
  const typeCal = req.query.typeCal;
  let result = 0
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
  let data = {
      result: result
  };
  res.status(200).send(data);
});

const port = 3030;

app.listen(port, function() {  
    console.log('Express server listening on port ' + port);
});