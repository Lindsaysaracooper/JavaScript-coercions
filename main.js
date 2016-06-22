  var firstNumber = document.querySelector('.number1');
  var secondNumber = document.querySelector('.number2');
  var calculate = document.querySelector('.calculate');
  var output = document.querySelector('output');

calculate.onclick = function() {
    var usersFirstNumber = Number(firstNumber.value);
    var usersSecondNumber = Number(secondNumber.value);
    var sum = usersFirstNumber + usersSecondNumber;
    console.log(sum);
    console.dir(document.querySelector('output'.innerhtml));
    output.innerHTML = sum;
}
