const nombres = ["Andres", "Valeria", "Ana", "Ramiro", "Richard"]

nombres.at(-1) // "Richard"
nombres[-1] // undefined
nombres.at(-3) // "Ana"
nombres[nombres.length -1] // "Richard"

const array = ["one", "two", "three", "four", "five", "six"];

console.log(array[array.length - 1]);
console.log(array.at(-1));