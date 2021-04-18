

const calculate = (inputValue) => {
  const regularExpression = /\+|\-|\/|\*/;
  const numbers = inputValue.split(regularExpression);
  const numberA = parseFloat(numbers[0]);
  const numberB = parseFloat(numbers[1]);
  const operator = inputValue.match(regularExpression);
  
  const calculator = new Calculator();
  calculator.add(numberA);  
  let result;
 
  // validations:
  if (isNaN(numberA) || isNaN(numberB) || !operator) {
    updateResult('Operation not regnized');
    return;
  }

  switch (operator[0]) {
    case '+': 
      result = calculator.add(numberB);
      break;
    case '-': 
      result = calculator.subtract(numberB);
      break;
    case '/': 
      result = calculator.divide(numberB);
      break;
    case '*': 
      result = calculator.multiply(numberB);
      break;
  }

  updateResult(result);

}

const updateResult = (result) => {
  document.getElementById('result').innerHTML = result;
}