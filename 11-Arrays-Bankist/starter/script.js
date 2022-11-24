'use strict';

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



const displayMovements = function(movements){
  containerMovements.innerHTML = ''       // textContent returns only text, innerHTML return everything in the HTML
  movements.forEach(function( mov, i){
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
      <div class="movements__value">${mov}</div>
      </div>`
      containerMovements.insertAdjacentHTML('afterbegin', html);
  });
}
displayMovements(account1.movements);

const calcPringBalance = function(movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} EUR`;
};

// console.log(containerMovements.innerHTML)


// FILTER METHOD
// // const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// // console.log(movements)
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements)

// const deposits = movements.filter(mov => mov > 0);
// console.log(deposits)

// const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals)







//REDUCE METHOD
// console.log(movements)
// // accumulator is like a SNOWBALL
// const balance = movements.reduce(function(acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`)
//   return acc + cur;
// }, 0)
// console.log(balance)

// // const balance = movements.reduce((acc, cur) => acc + cur, 0);
// // console.log(balance)

// let balance2 = 0;
// for( const mov of movements) balance2 += mov;
// console.log(balance2)
// displayMovements(account1.movements);



// const createUsernames = function(accs) {
//   accs.forEach(function (acc) {
//     acc.username = acc.owner
//     .toLowerCase()
//     .split(' ')
//     .map(name => name[0])
//     .join('');
//   })
//   }

  
//   createUsernames(accounts);
//   console.log(accounts)












  
// // MAXIMUM VALUE

// const max = movements.reduce((acc, mov) => {
//   if(acc > mov)
//     return acc;
//   else return mov;
// }, movements[0])
// console.log(max)


// SAME AS
// const max1 = function(arr) {
//   let maximum = arr[0]
//   for(let i = 0; i < arr.length; i++) {
//     const array = arr[i]
//     if(array > maximum) maximum = array;
//   } console.log(maximum)
// }
// max1(movements)









// const checkDogs = function() {
//   const dogsJulia = [3, 5, 2, 12, 7];
//   const dogsKate = [4, 1, 15, 8, 3];
//   const  correctedDogsJulia = dogsJulia.slice(2,3)
//   // movements.forEach(function(mov, i, arr) {    
//     //   if( mov > 0) {     // in forEach, the 1st el is the current el, the 2nd is the index 
//     //     console.log(`Movement ${i + 1}: You deposited ${mov}`);
//     //   } else{
//     //     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`)
//     //   }
//     // });
  
// }

//CHALLENGE 1

// checkDogs()
// const checkDogs = function(dogsJulia, dogsKate) {
//   // const correctedDogsJulia = dogsJulia.slice(1,3);   is okay, but slice is also good
//   const correctedDogsJulia = dogsJulia.slice();
//   correctedDogsJulia.splice(0, 1);
//   correctedDogsJulia.splice(-2);
//   console.log(correctedDogsJulia)
//   const allDogs = correctedDogsJulia.concat(dogsKate)
//   // const allDogs= [...correctedDogsJulia, ...dogsKate]
//   console.log(allDogs)
//   allDogs.forEach(function(dog, i) {
//     if (dog >= 3) {
//       console.log(`Dog number ${i + 1} is an adult 🦮, and is ${dog} year(s) old`)
//     } else {
//       console.log(`Dog number ${i + 1} is a puppy 🐶, and is ${dog} year(s) old`)
//     }
//   })
// };


// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3])
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4])



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



// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);


// currencies.forEach(function(value, key, map) {
//   console.log(`${key}: ${value}`);
// });

//   //USD: United States dollar
//   //EUR: Euro
//   //GBP: Pound sterling

// // SET

// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique)
// currenciesUnique.forEach(function(value, _ , map) {
//   console.log(`${value}: ${value}`);  
//   //USD: USD
//   //GBP: GBP
//   //EUR: EUR
// });






// MAP, FILTER, REDUCE

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


// // the map method
// const eurToUsd = 1.1;

// const movementssUSD = movements.map(function(mov) {
//   return mov * eurToUsd;
// })

// const movementsUSD = movements.map(mov => mov * eurToUsd);
// console.log(movements)
// console.log(movementsUSD)
// // console.log(movementssUSD)

// // const movementsUSDfor = [];
// // for(const mov of movements) movementsUSDfor.push(mov * eurToUsd)
// // console.log(movementsUSDfor);

// const movementsDescriptions = movements.map((mov, i) => {    
//   `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
//   if( mov > 0) {     // in forEach, the 1st el is the current el, the 2nd is the index 
//     return `Movement ${i + 1}: You deposited ${mov}`;
//   } else {
//     return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}` // abs = absolute
//   }
// });
// console.log(movementsDescriptions)


// COMPUTING USERNAMES




/// PRACTICE
// const user = 'Steven Thomas Williams'; // stw


// // const user = 'Steven Thomas Williams'; // stw
// // const username = user
// // .toLowerCase()
// // .split(' ')
// // .map(function(name) {
// //   return name[0]
// // }).join('')
  

// console.log(createUsernames(user));
// console.log(createUsernames('Steven Thomas Williams'));







// FILTER METHOD



// const deposits = movements.filter(function(mov){
//   return mov > 0;
// })

// const withdrawals = movements.filter(function(mov){
//   return mov < 0;
// })
// console.log(movements)
// console.log(deposits)
// console.log(withdrawals)

// const deposits = movements.filter(mov => mov > 0);
// console.log(deposits)

// const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals)


// const depositsFor = []
// for (const mov of movements) if (mov > 0) depositsFor.push(mov);
// console.log(depositsFor)


// const withdrawalsFor = []
// for (const mov of movements) if(mov < 0) withdrawalsFor.push(mov);
// console.log(withdrawalsFor)