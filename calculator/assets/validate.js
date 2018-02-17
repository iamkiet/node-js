let notification = document.querySelector('#notification')
let calForm = document.forms['calForm']

let urlParams = new URLSearchParams(window.location.search);

  if (urlParams.has('typeCal')) {
    let typeCalName = urlParams.get('typeCal')
    document.forms["calForm"][typeCalName].checked = true;
  }

calForm.addEventListener('submit', function(e){
  let firstNum = calForm.querySelector('#firstNum')
  let secondNum = calForm.querySelector('#secondNum')
  let typeCal = calForm.querySelectorAll('input[type="radio"]');
  let typeCalValue;
  for (var i = 0; i < typeCal.length; i++) {
    if (typeCal[i].type === 'radio' && typeCal[i].checked) {
      typeCalValue = typeCal[i].value;       
    }
  }

  let patt = /[a-z ]/ // regular expression: find from a to z and whitespace in any string => boolearn

  if (firstNum.value === "" || firstNum === undefined) {
    firstNum.value = ""
    notification.textContent = "first number is empty or undefined"
    e.preventDefault()
  } else if (secondNum.value === "" || secondNum === undefined) {
    secondNum.value = ""
    notification.textContent = "second number is empty or undefined"
    e.preventDefault()
  } else if (patt.test(firstNum.value)) {
    notification.textContent = "first number is not a number"
    e.preventDefault()
  } else if (patt.test(secondNum.value)) {
    notification.textContent = "second number is not a number"
    e.preventDefault()
  } else if (parseInt(secondNum.value) === 0 && typeCalValue === 'div') { // typeCal = div and secondNum = 0
    notification.textContent = "can not divide by zero"
    e.preventDefault()
  } else if (typeCalValue === '' || typeCalValue === undefined) {
    notification.textContent = "missing type of calculate"
    e.preventDefault()
  }
  // pass all above
  e.stopPropagation()
})