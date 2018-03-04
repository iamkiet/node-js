let notification = document.querySelector('#notification')
let calForm = document.forms['calForm']

$("#calculateBtn").click(function() {
  let firstNum = $('#firstNum').val();
  let secondNum = $('#secondNum').val();
  let typeCal = $('input[name=typeCal]:checked').val();

  let patt = /[a-z ]/ // regular expression: find from a to z and whitespace in any string => boolearn

  if (firstNum === "" || firstNum === undefined) {
    firstNum.value = ""
    notification.textContent = "first number is empty or undefined"
    // this.preventDefault()
  } else if (secondNum === "" || secondNum === undefined) {
    secondNum.value = ""
    notification.textContent = "second number is empty or undefined"
    // this.preventDefault()
  } else if (patt.test(firstNum)) {
    notification.textContent = "first number is not a number"
    // this.preventDefault()
  } else if (patt.test(secondNum)) {
    notification.textContent = "second number is not a number"
    // this.preventDefault()
  } else if (parseInt(secondNum) === 0 && typeCal === 'div') { // typeCal = div and secondNum = 0
    notification.textContent = "can not divide by zero"
    // this.preventDefault()
  } else if (typeCal === '' || typeCal === undefined) {
    notification.textContent = "missing type of calculate"
    // this.preventDefault()
  } else {
    notification.textContent = ""
  }

  $.ajax({
    url: `http://localhost:3030/api/tinh?firstNum=${firstNum}&secondNum=${secondNum}&typeCal=${typeCal}`,
    data: {
        format: 'json'
    },
    error: function() {
        $('#notification').html('<p>An error has occurred</p>');
    },
    dataType: 'json',
    success: function(data) {
        var $rs = data.result;
        $('#firstNum').val(firstNum);
        $('#secondNum').val(secondNum);
        $('#result').val($rs);
    },
    type: 'GET'
  });
});