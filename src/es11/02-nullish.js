// Aprendemos como utilizar el operador ??

const another = 23;
const validate = another ?? 5;

console.log(validate)



const usuario1 = {}
const nombre1 = usuario1.name ?? "Andres"

const usuario2 = {name: "Juan"}
const nombre2 = usuario2.name ?? "Andres"

console.log(nombre1) // 'Andres' 
console.log(nombre2) // 'Juan'