 let value1 = parseFloat(prompt("Enter first value:"));
let value2 = parseFloat(prompt("Enter second value:"));
let symbol = prompt("Enter operator (+, -, *, /):");
let output;

if (isNaN(value1) || isNaN(value2)) {
  alert("Please enter valid numeric values.");
} else {
  switch (symbol) {
    case '+':
      output = value1 + value2;
      break;
    case '-':
      output = value1 - value2;
      break;
    case '*':
      output = value1 * value2;
      break;
    case '/':
      if (value2 === 0) {
        output = "Cannot divide by zero.";
      } else {
        output = value1 / value2;
      }
      break;
    default:
      output = "Invalid operator.";
  }

  alert("Result: " + output);
}