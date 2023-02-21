function* iterate(array){
    for (let value of array){
        yield value;
    }
}

const it = iterate([
    'Oscar',
    'David',
    'Camila',
    'Luisa',
    'Gilberto'
])

console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)

function* keepCount(){
    let last = 1
    while(true){
        yield last++
    }
}
const counter = keepCount()

console.log(counter.next().value)
console.log(counter.next().value)
console.log(counter.next().value)
console.log(counter.next().value)

