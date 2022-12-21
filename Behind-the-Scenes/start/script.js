'use strict';

// function calcAge(birthYear) {
//     const age = 2022 - birthYear;

//     function printAge() {
//         let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//         console.log(output);
        
//         if(birthYear >= 1981 && birthYear <= 1996) {
//             var millenial = true;
//             // creating NEW variable with the same name as outer scope's variable
//             const firstName = 'Steven';     // first name will change because JS first looks for a variable in the current block

//             // Reassigning outer scope's variable
//             output = 'NEW OUTPUT'
//             const str = `Oh, you are a millenial, ${firstName}`;
//             console.log(str);

//             function add(a, b) {
//                 return a + b;
//             } console.log(add (2, 7)); // will work only in the func block

//         }
//         console.log(millenial)   // var can be accessed because it's a function scope variable.
//         // console.log(str) cannot be accessed because it's a block scope (let too)
//         // add(2 + 3); doesn't work because funcs are blocks in ES6
//         console.log(output)
//     }
//     printAge();
//     return age;
// }
// const firstName = 'Alex';
// calcAge(1995);




// TERMINAL RESULTS Alex, you are 27, born in 1995
// script.js:18 Oh, you are a millenial, Steven            ==>  First output
// script.js:22 9
// script.js:25 true
// script.js:28 NEW OUTPUT       ==> Second output



// const numbers = [21, 221, 543234, 435,]

// const bigNum = function(arr) {
//     let max = arr[0];
//     for(let i = 0; i < arr.length; i++) {
//         const array = arr[i]
//         if(array > max) max = array
//     } console.log(max)
// }
// const check = bigNum(numbers)














// console.log(me);                   // Cannot access a variable before declaration.
// // console.log(job);                   // Dead zone
// // console.log(year);            

// var me = 'Alex';                    // will be hoisted but turns into UNDFINED
// let job = 'teacher';
// const year = 1991;

// // FUNCTIONS
// console.log(addDecl(2, 3))             // can Access
// // console.log(addExpr(2, 3))             // cannot Access because it was declared as CONST
// // console.log(addArrow(2, 3))            // will not work

// function addDecl(a, b) {
//     return a + b;
// }

// const addExpr = function(a, b) {
//     return a + b;
// }

// var addArrow = (a, b) => a + b;




//Example
//     
























// // THIS

// // console.log(this);

// const calcAge = function(birthYear) {
//     console.log(2022 - birthYear);
//     console.log(this);
// };
// calcAge(1995);


// const calcAgeArrow = birthYear => {
//     console.log(2022 - birthYear);
//     // console.log(this);
// };
// calcAgeArrow(1951);

// const alex = {
//     year: 1995,
//     calcAge: function () {
//         console.log(this);    //opens Window because it has no params
//         console.log(2022 - this.year);  // will work because param is attached to it
//     },
// };
// alex.calcAge();


// const matilda = {
//     year: 2017,
// };



// matilda.calcAge = alex.calcAge;     //metjod borrowing
// matilda.calcAge();                  // 'this' from 144 is pointed to Matilda.  This keyword is dynamic

// const f = alex.calcAge;
// // f();                               //regular func  not attached to anything













// Regular functions and Arrow functions


// // var firstName = 'Matilda'       //creates an object in Window, and 186 will say 'Hey Matilda'
// const alex = {
//     firstName: 'Alex',                      //method
//     year: 1995,
//     calcAge: function () {
//         console.log(this);    //opens Window because it has no params
//         console.log(2022 - this.year);  // will work because param is attached to it



//         //  SOLUTION 1
//         // const self = this; // self or that      // shows true
//         // const isMillenial = function () {
//         //     console.log(self)
//         //     console.log(self.year >= 1981 && self.year <= 1996);
//         // };





//         // SOLUTION 2
//         // const isMillenial = function () {
//         const isMillenial =  () => {
//             console.log(this)
//             console.log(this.year >= 1981 && this.year <= 1996);
//         };
//         isMillenial(); // this is undefined inside of a regular function
//     },

//     // greet: function () { // gets his own this keyword
//     //     console.log(`Hey ${this.firstName}`);  
    
//     greet: () => {
//         console.log(this);  
//         console.log(`Hey ${this.firstName}`);   //undefined because arrow doesn't own this keyword
//     },
// };

// alex.greet(); 
// // console.log(this.firstName);        // this is a window object that's why undefined
// alex.calcAge()      // this is undefined


























// // Arguments keyword        //Not actual, but good to know
// const addExpr = function(a, b) {
//     console.log(arguments)
//     return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 8, 12)

// var addArrow = (a, b) => {
//     console.log(arguments);
//     return a + b;
// };
// addArrow(2, 5, 8);










// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age)
// console.log(oldAge)



// const me = {
//     name: 'Jonas',
//     age: 30,
// };

// const friend = me;
// friend.age = 27;
// console.log('Friend', friend);
// console.log('Me', me)


// let lastName = 'Williams';      //because the data is kept is call stack
// let oldLastName = lastName;
// lastName = 'Davis';
// console.log(lastName, oldLastName)  //Davis Williams


// const jessica = {
//     firstName: 'Jessica',
//     lastName: 'Williams',
//     age: 27,
// };
// const marriedJessica = jessica;            // bacause data is keps in HEAP
// marriedJessica.lastName = 'Davis';
// console.log('Before the marriage:' , jessica2);
// console.log('After the marriage', jessicaCopy);
//Before the Marriage: { firstName: 'Jessica', lastName: 'Davis', age: 27 }
// After the marriage { firstName: 'Jessica', lastName: 'Davis', age: 27 }


// marriedJessica = {}; // Can't do that because the object is alreade saved in the heap

const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Alice', 'Bob']
};

const jessicaCopy = Object.assign({}, jessica2);            //Object.assign creates a shallow copy and alows to maipulate objects
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before the marriage:' , jessica2);
console.log('After the marriage', jessicaCopy);
