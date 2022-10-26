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













// //Arrays

// const friend1 = 'Alex';
// const friend2 = 'Bob';
// const friend3 = 'Nick';


// const friends = ['Alex', 'Bob', 'Nick']     // usuas (LITERAL syntax)
// console.log(friends);

// // const years = new Array(1991, 1995, 2020, 2022);
// // console.log(years);

// console.log(friends[0])
// console.log(friends[2])

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends);
// // cannot change the whole arrray


// friends[1] = 'Paul'
// console.log(friends)
// // cannot change multiple variables


// const firstName = 'Jonas'
// const alex = [firstName, 'Kim', 2022 - 1995, 'teacher', friends];
// console.log(alex);
// console.log(alex.length);

// // Exercise

//     const calcAge = function(years) {
//       return 2022 - years;
//     }  
//  const years = [1990, 1967, 2002, 2010, 2018];
//  const age1 = calcAge(years[0]);
//  console.log(age1);

//  const age2 = calcAge(years[1]);
//  console.log(age2);

//  const age3 = calcAge(years[2]);
//  console.log(age3);

//  const age4 = calcAge(years[3]);
//  console.log(age4);

//  const age5 = calcAge(years[4]);
//  console.log(age5);

//  console.log(age1, age2, age3, age4, age5);



//  const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2]), calcAge(years[3]), calcAge(years[4])]
//  calcAge(years[years.length - 1]);

//  console.log(ages);

















// // Basic Array Operations (Methods)

//  const friends = ['Alex', 'Bob', 'Nick'];

//  //Add elements
//  const newLenght = friends.push('Peter'); // add as the last

//  console.log(friends);
//  console.log(newLenght);

//  friends.unshift('John') //add as the first
//  console.log(friends)


//  //Remove elements
// friends.pop(); //remove last
// const popped = friends.pop(); 
// console.log(friends)
// console.log(popped);

// friends.shift(); // REMOVE First
// console.log(friends)

// console.log(friends.indexOf('Bob')); //1
// console.log(friends.indexOf('Steven'));//-1

// friends.push('Steven');
// console.log(friends.includes('Bob'))
// console.log(friends.includes('Steven'))
// console.log(friends.includes(23))


// if(friends.includes('Ruby')){
//     console.log('You have a friend named Bob')
// } else{
//     console.log("You don't have friends")
// }

















// OBJECTS

// const alexArray = [
//     'Alex',
//     'Kim',
//     2022 - 1995,
//     'teacher',
//     ['Bob', 'Martin', 'Jack']
// ];
// // console.log(alexArray); 

// const alex = {
//     firstName: 'Alex',
//     lastName: 'Kim',
//     age: 2022 - 1995,
//     job: 'teacher',
//     friends: ['Bob', 'Martin', 'Jack']
// };

// console.log(alex);
// console.log(alex.lastName)
// console.log(alex['lastName'])

// // Dot . calls a property in a function

// //bracket notation can have anything in it

// const nameKey = 'Name';                // need to use pro[perty names
// console.log(alex['first' + nameKey]);
// console.log(alex['last' + nameKey]);

// // console.log(alex.'last' + nameKey);               -----> can't use it with dot


// // in Arrays order is important, in Function order is not important.


// const interestedIn = prompt('What do you want to know about Alex? Choose between firstName, lastName, age, job, and friends');           //pop-up window with input


// if(alex[interestedIn]) {
//     console.log(alex[interestedIn]); // undefined is for unexisted notations
// } else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job, and friends')
// }

// alex.location = 'Busan, South Korea';
// alex.love = '길가현 공주님';
// alex['instagram'] = '@alex_kimr';
// console.log(alex);

// const bestFriend = 'friends';
// if(alex.friends){
//     console.log('Alex has 3 friends and his best friends is ')
//     console.log(alex.friends[0]);
// }
// console.log(bestFriend);

// console.log(`${alex.firstName} has ${alex.friends.length} friends, and his bes friend is ${alex.friends[0]}`)


// // 'Alex has 3 friends, and his best friend is Bob
 














// Object methods



// const alex = {
//     firstName: 'Alex',
//     lastName: 'Kim',
//     birthYear: 1995,
//     job: 'teacher',
//     friends: ['Bob', 'Martin', 'Jack'],
//     hasDriversLicense: true, 

//     // calcAge: function(birthYear) {                   // PROPERTY = METHOD       ANY function in an object is a METHOD
//     //     return 2022 - birthYear;
//     // }


//     //  calcAge: function() {   
//     //     // console.log(this);      //this = Alex          // PROPERTY = METHOD       ANY function in an object is a METHOD
//     //     return 2022 - this.birthYear;
//     // }

//     calcAge: function() {   
//         this.age = 2022 - this.birthYear
//         return this.age;
//     },

//     getSummary: function(){
//       return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
//     }
// };

// console.log(alex.calcAge());

// console.log(alex.age);
// console.log(alex.age);
// console.log(alex.age);

// console.log(alex.getSummary());
 
// // const calcAge = function(birthYear) {                     // FUNCTION
// //     return 2022 - birthYear;
// // }
// // console.log(alex.calcAge)

// // console.log(alex)



// //Challenge
// console.log(`${alex.firstName} is a ${alex.age}-year old ${alex.job}, and`)
// if(alex.hasDriversLicense){
//     console.log('he has a drivers licence')
// } else {
//     console.log('nope')
// }