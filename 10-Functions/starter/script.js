'use strict';

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

const flight = 'LH234';
const alex = {
    name: 'Aleksey Kim',
    passport: 'AA12345678'
}

const checkIn = function(flightNum, passenger) {
    flightNum = 'LH999'
    passenger.name = 'Mr.' + passenger.name;
    if(passenger.passport === 'AA12345678') {
        alert('Check In')
    } else{
        alert('Wrong passport!')
    }
}
// checkIn(flight, alex)
// console.log(flight)
// console.log(alex);


// // THE SAME AS...
// const flightNum = flight;
// const passenger = alex

const newPassport = function(person) {
    person.passport = Math.trunc(Math.random() * 10000000000)
};
newPassport(alex)
checkIn(flight, alex)

