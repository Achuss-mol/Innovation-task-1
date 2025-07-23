let num = 1;
while (num <= 4) {
  console.log(num);
  num++;
}

let answer;
do {
  answer = prompt("Type yes:");
} while (answer !== "yes");
console.log("Thank you");

let total = 0;
let max = parseInt(prompt("Enter how many numbers to add:"));
for (let i = 1; i <= max; i++) {
  total = total + i;
}
console.log("Total is", total);

for (let row = 1; row <= 2; row++) {
  for (let col = 1; col <= 3; col++) {
    console.log(row + " x " + col + " = " + (row * col));
  }
}