let fruits = ['Apple', 'Banana'];

let [a, b] = fruits;

console.log(a, fruits[1])

// object destructuring
let user = {username: 'Oscar', age: 35};

let {username, age} = user;
console.log(username, age);

// spread operator
let person = {name: 'Adán', age: 32}
let country = 'MX'
let dat = {...person, country}