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


const lufthansa = {
        airline: 'Lufthansa',
        iataCode: 'LH',
        bookings: [],
        // book: function() {}                  LEGACY
        book(flightNum, name) {
                console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
                );
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name})
        },
};
lufthansa.book(239, 'Aleksey Kim');
lufthansa.book(635, 'John Smith');


const eurowings = {
        airline: 'Eurowings',
        iataCode: 'EW',
        bookings: [],


};

const book = lufthansa.book;


//DOESN NOT WORK
// book(23, 'Sarah Conor');


// CALL METHOD 

book.call(eurowings, 23, 'Sarah Conor');
console.log(eurowings);


book.call(lufthansa, 239, 'Mary Cooper')
console.log(lufthansa)


const swiss = {
        airline: 'Swiss Air Lines',
        iataCode: 'LX',
        bookings: [],
}

book.call(swiss, 71, 'Mary Cooper')


// APPLY METHOD

const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss)

book.call(swiss, ...flightData)
// console.log(swiss)