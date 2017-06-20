"use strict";

window.addEventListener('load', function(e) {

  var firstNumber = document.querySelector('input[name = first-number]');
  var secondNumber = document.querySelector('input[name = second-number]');
  var operations = document.querySelectorAll('.operation');
  var resultField = document.querySelector('.result');

  for (var i = 0; i < operations.length; i++) {
    operations[i].addEventListener('click', function (e) {
      console.log(e.target.textContent);
      operation(e.target.textContent);
    });
  }

  function operation(operator) {
    console.log('Клик по кнопке операции '+ operator +'!');
    var a = parseInt(firstNumber.value);
    var b = parseInt(secondNumber.value);
    var result;

    switch(operator) {
      case '+':
        result = a + b;
        break;

      case '-':
        result = a - b;
        break;

      case '*':
        result = a * b;
        break;

      case '/':
        if (b === 0) {
          alert('Warning, divided by zero! Please, input correct value!');
          result = ' ';
        } else {
          result = a / b;
        }
        break;

      default:
        alert('Chose operation please!') ;
    }

    resultField.innerHTML = result;
  }

});

