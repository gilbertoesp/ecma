function newUser(name, age, country){
    return {
        user,
        age,
        country,
    }
}

function Dog(name, age) {
    this.name = name;
    this.age = age;
    this.barking = function() { return `${this.name} says WOOF`}
}
const loba = new Dog("Loba", 3)
console.log(loba.barking());