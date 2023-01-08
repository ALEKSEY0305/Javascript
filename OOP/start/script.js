// 'use strict';

// const Person = function(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear


//     // Never create a method inside a constructor func
//     // this.calcAge = function() {
//     //     console.log(2022 - this.birthYear)
//     // }
// }
// const alex = new Person('Alex', 1995)
// console.log(alex)

// // 1. New {} is created
// // 2. function is called, this = {}
// // 3. {} linked to prototype
// // 4 function automatically returns {}


// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 1975)
// console.log(matilda)
// console.log(jack)

// console.log(alex instanceof Person)
// // console.log(jay instanceof Person)




// // Prototypes
// console.log(Person.prototype)

// Person.prototype.calcAge = function() {
//     console.log(2022 - this.birthYear)
// };

// alex.calcAge()
// matilda.calcAge()
// jack.calcAge()
// console.log(alex)
// console.log(jack)
// console.log(matilda)

// console.log(alex.__proto__)
// console.log(alex.__proto__ === Person.prototype)


// console.log(Person.prototype.isPrototypeOf(alex))
// console.log(Person.prototype.isPrototypeOf(matilda))
// console.log(Person.prototype.isPrototypeOf(Person))


// // const me = {
// //     name: 'Alex',
// //     age: 18,
// // }
// // console.log(me)

// // let newMe = me

// // newMe.age = 25

// // console.log(me)prototypeOfLinkedObjects

// Person.prototype.species = 'Homo Sapiens';
// console.log(alex.species, matilda.species);

// console.log(alex.hasOwnProperty('firstName'))
// console.log(alex.hasOwnProperty('species'))


// // prototype inheritance / the prototype chain
// console.log(alex.__proto__);
// // Object.prototype (top of prototype chain)
// console.log(alex.__proto__.__proto__);
// console.log(alex.__proto__.__proto__.__proto__);

// console.log(Person.prototype.constructor); //constructor
// console.dir(Person.prototype.constructor); //constructor function

// const arr = [3, 6, 4, 5, 6, 9, 3]; // new Array === []
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// console.log(arr.__proto__.__proto__);


// Array.prototype.unique = function() {
// return [...new Set(this)]
// };

// console.log(arr.unique());  // not suggested to use this

// const h1 = document.querySelector('h1')

// // Challenge 1
// const Car = function(make, speed) {
//     this.make = make;
//     this.speed = speed
// }
// Car.prototype.accelerate = function() {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed} km/h`)
// }
// Car.prototype.brake = function() {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed} km/h`)
// }

// const bmw = new Car('BMW', 120);
// const mercedes = new Car('Mercedes', 95);
// bmw.accelerate()
// bmw.accelerate()
// bmw.brake()
// bmw.accelerate()




// settlers and gettlers 
const account = {
    owner: 'alex',
    movements: [200, 530, 120, 300],

    get latest() {                  // gets the necessary data from object
        return this.movements.slice(-1).pop()
    },
    
    set latest(mov) {              // latest is just a name for func // // sets a new data in an object
        this.movements.push(mov)
    },

}

console.log(account.latest);
account.latest = 50;
console.log(account.movements)



// static methods
