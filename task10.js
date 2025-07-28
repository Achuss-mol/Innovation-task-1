function output(result) {
  console.log("Final value is " + result);
}

function addNumbers(num1, num2, finish) {
  let total = num1 + num2;
  finish(total);
}
addNumbers(7, 8, output);

function sayHi(user, afterHi) {
  console.log("Hello " + user);
  afterHi();
}

function endMessage() {
  console.log("Have a nice day!");
}
sayHi("Kiran", endMessage);

var greeting = "Welcome All";
console.log(greeting);

{
  let vehicle = "Car";
  const bike = "Scooter";
  console.log(vehicle);
  console.log(bike);
}

function makeNoise() {
  var sound = "Boom";
  console.log(sound);
}
makeNoise();

{
  var snack = "Burger";
}
console.log(snack);

{
  let hobby = "Drawing";
  const sport = "Football";
  console.log(hobby);
  console.log(sport);
}