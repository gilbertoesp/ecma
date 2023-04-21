// Promise All
const promise1 = new Promise((resolve, reject) => reject("Rechazado"));
const promise2 = new Promise((resolve, reject) => resolve("Resuelto"))

// Utilizado para ejecutar múltiples promesas en un movimiento

Promise.any([promise1, promise2])
    .then(response => console.log(response))