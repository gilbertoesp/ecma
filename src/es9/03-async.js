async function* anotherGenerator() {
    yield await Promise.resolve(1)
    yield await Promise.resolve(2)
    yield await Promise.resolve(3)

}

const gen = anotherGenerator();

gen.next().then(response => console.log(response.value))
gen.next().then(response => console.log(response.value))
gen.next().then(response => console.log(response.value))

console.log("Hello!")

async function arrayOfNames(array){
    for await(let value of array){
        console.log(value)
    }
}

const names = arrayOfNames(["Oscar", "Adan", "Gilberto", "Clara"])
console.log("after")