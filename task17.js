let a = { name: 'Karan' };
function hello() {
  console.log('Hello ' + this.name);
}
hello.call(a);
let b = { name: 'Sneha' };
function hi(msg, sign) {
  console.log(msg + ' ' + this.name + sign);
}
hi.apply(b, ['Hi', '?']);
let c = { name: 'Lakshmi' };
function welcome() {
  console.log('Welcome ' + this.name);
}
let newFunc = welcome.bind(c);
newFunc();