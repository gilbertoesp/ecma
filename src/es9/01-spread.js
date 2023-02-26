const user = {
    username: "gilbertoesp",
    age: 25,
    country: "MX",
}
const {username, ...values} = user

console.log(values)


// Utilizando el operador spread puede ocasionar que en objetos compuestos se copien referencias a los objetos originales, no una copia como tal
const original = { datos: [1, [2, 3], 4, 5] }
const copia = { ...original }

console.log(original === copia) // false
console.log(original["datos"] === copia["datos"]) // true

// para superar esto utilizamos la funcion que nos regala ECMA 'structuredClone' que copia en otra variable un objeto con todos los datos aninadados que pueda contenener
const to_clone = { datos: [1, [2, 3], 4, 5] }
const clone = structuredClone(original)

console.log(to_clone === clone) // false
console.log(to_clone["datos"] === clone["datos"]) // false