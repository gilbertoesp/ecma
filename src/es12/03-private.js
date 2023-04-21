class User {
    constructor(name, age = 1){
        this.name = name
        this.age = age
    }
    // Metodos privados
    #greeting(){ 
        return `Hello! I am ${this.name}`
    }
    get #uAge(){
        return this.age;
    }
    set #uAge(n){
        this.age = n
    }
    show_age(){
        return `${this.name} is ${this.age} years old`
    }
    
};

let newUser = new User('Lazáro')
let gilbertoesp = new User('Gilberto')

console.log(newUser.greeting())
console.log(gilbertoesp.greeting())

newUser.uAge = 22; gilbertoesp.uAge = 25;

console.log(newUser.show_age())
console.log(gilbertoesp.show_age());
