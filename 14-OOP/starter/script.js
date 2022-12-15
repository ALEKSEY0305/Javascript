'use strict';

const Person = function(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear


    // Never create a method inside a constructor func
    // this.calcAge = function() {
    //     console.log(2022 - this.birthYear)
    // }
}
const alex = new Person('Alex', 1995)
console.log(alex)

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4 function automatically returns {}


const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975)
console.log(matilda)
console.log(jack)

console.log(alex instanceof Person)
// console.log(jay instanceof Person)




// Prototypes
console.log(Person.prototype)

Person.prototype.calcAge = function() {
    console.log(2022 - this.birthYear)
};

alex.calcAge()
matilda.calcAge()
jack.calcAge()
console.log(alex)
console.log(jack)
console.log(matilda)

console.log(alex.__proto__)
console.log(alex.__proto__ === Person.prototype)


console.log(Person.prototype.isPrototypeOf(alex))
console.log(Person.prototype.isPrototypeOf(matilda))
console.log(Person.prototype.isPrototypeOf(Person))


// const me = {
//     name: 'Alex',
//     age: 18,
// }
// console.log(me)

// let newMe = me

// newMe.age = 25

// console.log(me)