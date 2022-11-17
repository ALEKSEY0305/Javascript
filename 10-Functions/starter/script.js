'use strict';







// DEFAULTS PARAMS
// const bookings = [];
// const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {

//     // numPassengers = numPassengers || 1
//     // price = price || 199;

//     const booking = {
//         flightNum,
//         numPassengers,
//         price
//     }
//     console.log(booking)
//     bookings.push(booking);
// }
// createBooking('LH123')
// createBooking('LH123', 2, 800)
// createBooking('LH123', 2)
// createBooking('LH123', 5)


// createBooking('LH123',undefined, 1000)












//PASSING ARGUMENTS
// const flight = 'LH234';
// const alex = {
//     name: 'Aleksey Kim',
//     passport: 'AA12345678'
// }

// const checkIn = function(flightNum, passenger) {
//     flightNum = 'LH999'
//     passenger.name = 'Mr.' + passenger.name;
//     if(passenger.passport === 'AA12345678') {
//         alert('Check In')
//     } else{
//         alert('Wrong passport!')
//     }
// }
// // checkIn(flight, alex)
// // console.log(flight)
// // console.log(alex);


// // // THE SAME AS...
// // const flightNum = flight;
// // const passenger = alex

// const newPassport = function(person) {
//     person.passport = Math.trunc(Math.random() * 10000000000)
// };
// newPassport(alex)
// checkIn(flight, alex)







// const num = [423, 3255, 436362, 757745, 8878576, 2, 34, 5,]

// const biggestNum = function(arr) {
//     let max = arr[0]
//     for(let i = 0; i < arr.length; i++) {
//         const array = arr[i]
//         if(array > max) max = array
//     } console.log(max)
// }
// const check = biggestNum(num)



// FIRST CLASS FUNCTIONS ARE JUST A FEATURE
//IMPORTANT TO REWATCH!!!!!!

// const oneWord = function(str) {
//     return str.replace(/ /g, '').toLowerCase();
// }

// const upperFirstWord = function(str) {
//     const [first, ...others] = str.split(' ');
//     return [first.toUpperCase(), ...others].join(' ')
// };

// //HIGHER-ORDER FUNCTION
// const transformer = function(str, fn) {
//     console.log(`Original string: ${str}`);
//     console.log(`Transformed string: ${fn(str)}`);

//     console.log(`Transormed by: ${fn.name}`)
// }
// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);









 // Function returning functions

// // JS uses callback all the time
// const high5 = function() {
//     console.log('✋')
// }
// document.body.addEventListener('click', high5);

// ['Alex', 'Martha', 'Jonas', 'Martin'].forEach(high5);



// const greet = function(greeting) {
//     return function(name) {
//         console.log(`${greeting} ${name}`);
//     }
// }

// const greet = greeting => name => 
//         console.log(`${greeting} ${name}`);
    

// const greeterHey = greet('Hey') ;// is a function now
// greeterHey('Alex');
// greeterHey('Jonas');


// greet('Hello')('Alex')


// const lufthansa = {
//         airline: 'Lufthansa',
//         iataCode: 'LH',
//         bookings: [],
//         // book: function() {}                  LEGACY
//         book(flightNum, name) {
//                 console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//                 );
//         this.bookings.push({flight: `${this.iataCode}${flightNum}`, name})
//         },
// };
// lufthansa.book(239, 'Aleksey Kim');
// lufthansa.book(635, 'John Smith');


// const eurowings = {
//         airline: 'Eurowings',
//         iataCode: 'EW',
//         bookings: [],


// };

// const book = lufthansa.book;


// //DOESN NOT WORK
// // book(23, 'Sarah Conor');


// // CALL METHOD 

// book.call(eurowings, 23, 'Sarah Conor');
// console.log(eurowings);


// book.call(lufthansa, 239, 'Mary Cooper')
// console.log(lufthansa)

// const swiss = {
//         airline: 'Swiss Air Lines',
//         iataCode: 'LX',
//         bookings: [],
// }

// book.call(swiss, 71, 'Mary Cooper')


// // APPLY METHOD

// const flightData = [583, 'George Cooper'];
// book.apply(swiss, flightData);
// console.log(swiss)

// book.call(swiss, ...flightData)
// // console.log(swiss)

// lufthansa.book(333, 'you')

// book.call(eurowings, 33, 'Jerry')


// // BIND METHOD
// const bookEW = book.bind(eurowings);
// bookEW(321, 'Steven Simpson')

// const bookLX = book.bind(swiss);
// bookLX(333, 'Martha Wayne')

// const bookLH = book.bind(lufthansa);
// bookLH(1, 'Mr Nobody');

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Aleksey Kim')




// // With Event Listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function() {
//         console.log(this);

//         this.planes++;
//         console.log(this.planes);
// };
// // lufthansa.buyPlane()                         ADDS ANOTHER PLANE

// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
// //this is atteched to buy. this keyword is dynamic


// //Partial application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(.1, 200));

// const addVAT = addTax.bind(null, .23);
// // addVAT = value => value + value * .23
// console.log(addVAT(100))
// console.log(addVAT(23))

// Function returning a function
// const addTax2 = function(rate) {
//         return function(value) {
//                 // console.log(value + value * rate)    Option1
//                 return value + value * rate           //Option2
//         };
// };
// const addVAT2 = addTax2(0.23)
// // addVAT2(100)                 Option1
// // addVAT2(23)                  Option1

// console.log(addVAT2(100))     //Option2
// console.log(addVAT2(23))      //Option2


// CHALLENGE 1

// const poll = {
//         question: "What is your favourite programming language?",
//         options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
//         // This generates [0, 0, 0, 0]. More in the next section!
//         answers: new Array(4).fill(0),
//         registerNewAnswer(){
//                 //GET ANSWER
//                 const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}\n Write option number`)
//                 );
//                 console.log(answer)
  
// // REGISTER THE ANSWER
//         typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;

//         this.displayResults();
//         this.displayResults('string')
                      
//         }, 
//         displayResults(type = 'array') {
//                 if(type === 'array') {
//                         console.log(this.answers);
//                 } else if (type === 'string') {
//                         // Poll results are 13, 2, 4, 1
//                         console.log(`Poll results are ${this.answers.join(', ')}`)
//                 }
//         }

// };
// // poll.registerNewAnswer()

// document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll))

// poll.displayResults.call({answers: [5, 2, 3]}, 'string')
// poll.displayResults.call({answers: [1, 5, 3, 9, 6, 1]}, 'string')

// [ 5, 2, 3]
// [2, 5, 3, 9, 6, 1]


// const runOnce = function() {
//         console.log('This will never run again')
// }
// runOnce();


// // IIFE
// (function() {
//         console.log('This will never run again')
//         const isPrivate = 23;
        
// })();   
// // console.log(isPrivate);


// (() =>  console.log('This will ALSO never run again'))();

// // WHY NEED IIFE?

// {
//         const isPrivate = 23;
//         var notPrivate = 46
        
// }
// // console.log(isPrivate);
// console.log(notPrivate)                 // VAr can access data from outside the scope






// CLOSURES

const secureBooking = function() {
        let passengerCount = 0;


        return function() {
                passengerCount++;
                console.log(`${passengerCount} passengers`);
        }
}

const booker = secureBooking()
booker();
booker();
booker();
booker();
booker();

console.dir(booker)




//MISTAKE CLOSURE

// function bind(contex, fn) { 
//         return function(...args) {
//                 fn.aplly(contex, args ) 
//         }
// };
// function logPreson() {
//         console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
// }

// const person1 = { name: 'Alex', age: 27, job: 'S/W Developer'};
// const person2 = { name: 'Ben', age: 33, job: 'iOS Developer'};

// bind(person1, logPreson())
// bind(person2, logPreson())