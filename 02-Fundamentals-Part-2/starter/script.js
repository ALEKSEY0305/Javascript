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


function love(Chippie, Gugu, hehehe) {
    const loveIs = `Sweet life is when ${Chippie} loves ${Gugu}, and when ${Gugu} loves ${Chippie}!!!!${hehehe}!`;
    return loveIs;
} 
const perfectLove = love('길가현', '알렉세이', 'You are mine')
console.log(perfectLove);

// MORE MAINTAINABLE CODE/ GOOD FOR CLEAN CODE // D R Y - don't repeat yourself