'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////'

// let arr = ['a', 'b', 'c', 'd', 'e']
// // SLICE
// console.log(arr.slice(2))    //starts from 2  ['c', 'd', 'e']
// console.log(arr.slice(2, 4))    //doesn't include the last one(4) ['c', 'd']
// console.log(arr.slice(-2))    //  ['d', 'e']
// console.log(arr.slice(-1))    //  ['e']
// console.log(arr.slice(1, -2))   //    ['b', 'c']
// console.log(arr.slice())    //      ['a', 'b', 'c', 'd', 'e']
// console.log([...arr])       //      ['a', 'b', 'c', 'd', 'e']


// // SPLICE       CHANGES THE ORIGINAL ARRAY (MUTATES)
// // console.log(arr.splice(2))      //  ['c', 'd', 'e']
// arr.splice(-1)                   //['a', 'b', 'c', 'd']
// arr.splice(1, 2)              //includes the 2nd     // ['a', 'd']
// console.log(arr)                //  ['a', 'b']





// // REVERSE
// arr = ['a', 'b', 'c', 'd', 'e'];               
// const arr2 = ['j', 'i', 'h', 'g', 'f'];       
// console.log(arr2.reverse());             //['f', 'g', 'h', 'i', 'j']
// console.log(arr2)                         // REVERSE mutates the array


// // CONCAT       connects
// const letters = arr.concat(arr2)      // specify in the brackets
// console.log(letters)      //['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
// console.log([...arr, ...arr2])  //['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']



// // JOIN
// console.log(letters.join(' - '))    // a - b - c - d - e - f - g - h - i - j



// AT METHOD      ALSO WORKS ON STRINGS

// const arr = [23, 11, 64];
// console.log(arr[0]);  // 23
// console.log(arr.at(0)); //23

// // GETTING THE LAST ELEMENT
// console.log(arr[arr.length - 1]); // 64
// console.log(arr.slice(-1)[0])     // 64
// console.log(arr.at(-1))           // 64     


// console.log('alex'.at(0))
// console.log('alex'.at(-1))






// const maxNum = function(arr) {
//   let max = arr[0]
//   for(let i = 0; i < arr.length; i++) {
//     const array = arr[i]
//     if(array > max) max = array;
//   } console.log(max)
// }
// maxNum(movements)







// for EACH method

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // for (const movement of movements) {
//   for (const [i, movement] of movements.entries()){
//   if( movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else{
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`)
//   }
// }


// console.log('-----FOR EACH -----')   // can't break out of the loop


// movements.forEach(function(mov, i, arr) {    
//   if( mov > 0) {     // in forEach, the 1st el is the current el, the 2nd is the index 
//     console.log(`Movement ${i + 1}: You deposited ${mov}`);
//   } else{
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`)
//   }
// });

// 0: function (200)
// 1: function (450)
// 2: function (-400)
// 3: function (3000)
// 4: function (-650)
// 5: function (-130)



const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);


currencies.forEach(function(value, key, map) {
  console.log(`${key}: ${value}`);
});

  //USD: United States dollar
  //EUR: Euro
  //GBP: Pound sterling

// SET

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique)
currenciesUnique.forEach(function(value, _ , map) {
  console.log(`${value}: ${value}`);  
  //USD: USD
  //GBP: GBP
  //EUR: EUR
});