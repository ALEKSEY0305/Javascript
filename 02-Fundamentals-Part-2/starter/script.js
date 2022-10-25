// Strict mode 

// 'use strict'; //highlights the errors and reserved words
// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive');


'use strict';
// function logger(delicious, sweet) {
//     const food = `My name is Alex and I love eating ${delicious} watermelons and ${sweet} pineapples!`;
//     return food;
// }
// const hobby = logger('delicious', 'sweet');
// console.log(hobby);

// calling / running / invoking a function
// logger(delicious);
// logger1(mouth-watering);
// logger2(scrumptious);


 // function parameters
// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice
// }

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4)
// console.log(appleOrangeJuice)


// function love(Chippie, Gugu, hehehe) {
//     const loveIs = `Sweet life is when ${Chippie} loves ${Gugu}, and when ${Gugu} loves ${Chippie}!!!!${hehehe}!`;
//     return loveIs;
// } 
// const perfectLove = love('길가현', '알렉세이', 'You are mine')
// console.log(perfectLove);

// MORE MAINTAINABLE CODE/ GOOD FOR CLEAN CODE // D R Y - don't repeat yourself













// // FUNCTION DECLARATION 

// function calcAge1(birthYear) {
//     return 2035 - birthYear;
// }
// const age1 = calcAge1(1995);
// console.log(age1);

// // FUNCTION EXPRESSION
// const calcAge2 = function (birthYear) {
//     return 2035 - birthYear;
// }
// const age2 = calcAge2(1990)
// console.log(age1, age2)
































// ARROW FUNCTION
// const yearOfBirth = birthYear => 2022 - birthYear;
// const currentAge = yearOfBirth(1995);
// console.log(currentAge);


// const yearUntilRetirement = (birthYear, firstName) => {
//     const currentAge = 2022 - birthYear;
//     const retirementAge = 65 - currentAge;
//     // return retirement;
//     return `${firstName} retires in ${retirementAge} years`;
// }

// console.log(yearUntilRetirement(1995, 'Alex')); 
// console.log(yearUntilRetirement(1984, 'Bob')); 

// Arrow functions cannot use 'this.'









// FUNCTIONS CALLING OTHER FUNCTIONS 

// function cutFruitPieces(fruit) {
//     return fruit * 12 ;
// }

// function fruitProcessor(apples, oranges, pineapples) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     const pineapplePieces = cutFruitPieces(pineapples)

//     console.log(apples, oranges, pineapples);
//     const juice = `Juice with ${applePieces} pieces of apples, ${orangePieces} pieces of oranges, and ${pineapplePieces} pieces of pineapples`;
//     return juice
// }
// console.log(fruitProcessor(5, 4, 2));

//DON'T REPEAT YOURSELF












//Reviewong Functions



// const calcAge = function(birthYear) {
//     return 2035 - birthYear;
// }

// const yearUntilRetirement = function (birthYear, firstName){
//     const currentAge = calcAge(birthYear);
//     const retirement = 65 - currentAge;
//     // return retirement;

//     if(retirement > 0){
//         console.log(`${firstName} retires in ${retirement} years`)
//         return retirement
//     } else{
//         console.log(`the ${firstName} has already retired`);
//         return -1;

//     }
//     // return `${firstName} retires in ${retirementAge} years`;
// }

// console.log(yearUntilRetirement(1995, 'Alex')); 
// console.log(yearUntilRetirement(1950, 'Bob')); 

// Arrow functions cannot use 'this.'


// const yearUntilRetirement = (birthYear, firstName) => {
//     const currentAge = 2022 - birthYear;
//     const retirementAge = 65 - currentAge;
//     // return retirement;
//     return `${firstName} retires in ${retirementAge} years`;
// }

// console.log(yearUntilRetirement(1995, 'Alex')); 
// console.log(yearUntilRetirement(1984, 'Bob')); 


