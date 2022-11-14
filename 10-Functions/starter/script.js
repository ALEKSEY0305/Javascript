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

const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function(str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ')
};

//HIGHER-ORDER FUNCTION
const transformer = function(str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transormed by: ${fn.name}`)
}
transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);







// JS uses callback all the time
const high5 = function() {
    console.log('✋')
}
document.body.addEventListener('click', high5);

['Alex', 'Martha', 'Jonas', 'Martin'].forEach(high5);