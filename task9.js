const combine = function(a, b) {
  return a + b;
};
console.log(combine(8, 4));

const addTwo = (x1, x2) => {
  return x1 + x2;
};
console.log(addTwo(3, 9));

const quickAdd = (numA, numB) => numA + numB;
console.log(quickAdd(6, 7));

const multiplyTwo = (num1, num2) => num1 * num2;
console.log(multiplyTwo(5, 3));

const greetUser = user => "Hi " + user;
console.log(greetUser("Liya"));

const checkEven = number => number % 2 === 0;
console.log(checkEven(12));
console.log(checkEven(13));

const squareOf = input => input * input;
console.log(squareOf(7));s