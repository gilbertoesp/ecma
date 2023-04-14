const number1 = 45n
const number2 = BigInt(45)

console.log(typeof 45n) // 'bigint'
console.log(typeof number2)

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt

const max = Number.MAX_SAFE_INTEGER
const min = Number.MIN_SAFE_INTEGER

console.log(max)  // 9007199254740991
console.log(min) // -9007199254740991