let x = parseInt(prompt("Enter a number:"));
if (x == 10) {
  console.log("It is 10");
}

let y = parseInt(prompt("Enter another number:"));
if (y > 5) {
  console.log("Greater than 5");
} else {
  console.log("Not greater than 5");
}

let score = parseInt(prompt("Enter your score:"));
if (score >= 90) {
  console.log("Top score");
} else if (score >= 50) {
  console.log("Average score");
} else {
  console.log("Low score");
}

let color = parseInt(prompt("Pick a number (1–3):"));
switch (color) {
  case 1:
    console.log("Red");
    break;
  case 2:
    console.log("Blue");
    break;
  case 3:
    console.log("Green");
    break;
  default:
    console.log("Unknown color");
}