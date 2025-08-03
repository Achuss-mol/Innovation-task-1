let scores = [18, 9, 27, 5];
let topScores = scores.filter(function(value) {
  return value > 10;
});
console.log('Filter:', topScores);

let amounts = [200, 150, 50];
let totalAmount = amounts.reduce(function(a, b) {
  return a + b;
});
console.log('Reduce (Sum):', totalAmount);

let vehicles = ['car', 'bike', 'bus'];
let selectedVehicles = vehicles.slice(0, 2);
console.log('Slice:', selectedVehicles);
console.log('Original Vehicles:', vehicles);

let languages = ['Tamil', 'Hindi', 'English'];
languages.splice(1, 1, 'Telugu');
console.log('Splice:', languages);

let x = [11, 22];
let y = [33, 44];
let xCopy = [...x];
let xyCombined = [...x, ...y];
console.log('Copied Array:', xCopy);
console.log('Joined Array:', xyCombined);