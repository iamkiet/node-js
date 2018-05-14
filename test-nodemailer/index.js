const express = require('express');
const nodemailer = require('nodemailer');

const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());


app.post('/api/subscribe', (req, res) => {
  let {receiveMailers, subject, content} = req.body;
  let receiveMailersString = '';
  receiveMailers.forEach((item, index) => {

    receiveMailersString += item;
    if (index !== receiveMailers.length - 1) {
      receiveMailersString += ', ';
    }
  });
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'kietphototailieu@gmail.com',
      pass: 'concaccon'
    }
  });
  
  var mailOptions = {
    from: '[NODEMAILER _ BOT]',
    to: receiveMailersString,
    subject,
    text: content
  };
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  res.send({
    "API": "NODEMAILER",
    "STATUS": true,
    "MESSAGE": "SEND MAIL SUCCESSED"
  })
})

app.listen(3000, () => {
  console.log("Server running on port 3000");
})