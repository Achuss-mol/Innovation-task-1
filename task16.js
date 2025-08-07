let players = [
  { name: 'Meena', age: 19, city: { place: 'Thanjavur' } },
  { name: 'Naveen', age: 20, city: { place: 'Vellore' } }
];
console.log(players[0].name);
console.log(players[1].city.place);
function showNames(...members) {
  console.log(members);
}
showNames('Vimal', 'Divya');
let group1 = [7];
let group2 = [8];
let merged = [...group1, ...group2];
console.log(merged);
let profile = { name: 'Pooja', age: 24 };
let profileCopy = { ...profile };
console.log(profileCopy);
function displayInfo({ name, age }) {
  console.log(name);
  console.log(age);
}
displayInfo({ name: 'Sundar',age: 27 });