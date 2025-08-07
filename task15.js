let games = ['Cricket', 'Football'];
console.log(games[0]);
console.log(games[1]);
let employee = { fullName: 'Sita', age: 30 };
console.log(employee.fullName);
console.log(employee['age']);
let country = { state: { name: 'Kerala' } };
console.log(country.state.name);
let mobile = { brand: 'Samsung', model: 'Galaxy' };
for (let item in mobile) {
  console.log(item);
  console.log(mobile[item]);
}