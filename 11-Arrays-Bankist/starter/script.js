'use strict';

/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Aleksey Kim',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Gahyun Kil',
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



const displayMovements = function(movements, sort = false) {
  containerMovements.innerHTML = ''       // textContent returns only text, innerHTML return everything in the HTML


  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function( mov, i){
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
      <div class="movements__value">${mov}€</div>
      </div>`;
      containerMovements.insertAdjacentHTML('afterbegin', html);
  });
}
displayMovements(account1.movements);

const calcDisplayBalance = function(acc) {
  acc.balance = acc.movements
    .reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} €`;
};
// calcDisplayBalance((account1.movements))


// const calcDisplayBalance = function (acc) {
//   acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
//   labelBalance.textContent = `${acc.balance}€`;
// };
// console.log(calcDisplayBalance())

// console.log(containerMovements.innerHTML)


// FILTER METHOD
// // const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// // console.log(movements)
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements)

const deposits = movements.filter(mov => mov > 0);
// console.log(deposits)

const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals)

const eurToUsd = 1.1;

// PIPELINE
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);

// console.log(totalDepositsUSD)


const calcDisplaySummary = function(acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${out}€`


  const interest = movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr)=>{
      // console.log(arr)
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`


}
// calcDisplaySummary(account1.movements)


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



const createUsernames = function(accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
    .toLowerCase()
    .split(' ')
    .map(name => name[0])
    .join('');
  })
  }

  
  createUsernames(accounts);
  // console.log(accounts)

  const updateUI = function(acc) {
    // Display movements
    displayMovements(acc.movements);

    // Display balance
    calcDisplayBalance(acc);

    // Display summary
    calcDisplaySummary(acc);
  }

// Event handler
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  //Prevent form from submitting
  e.preventDefault();
  // console.log('LOGIN')

  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
  console.log(currentAccount);

  // if(currentAccount.pin === Number(inputLoginPin.value)) {
    console.log('currentAccount');
  // }
  if(currentAccount?.pin === Number(inputLoginPin.value)) {
    // console.log('LOGIN');

    // Display UI and welcome message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = ''; //assignment operator works from right to left
    inputLoginPin.blur();



    // Update UI
    updateUI(currentAccount);

    
  }
});

btnTransfer.addEventListener('click', function(e) {
  e.preventDefault()
  const amount = Number(inputTransferAmount.value)
  const recieverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    recieverAcc &&
    currentAccount.balance >= amount &&
    recieverAcc.username !== currentAccount?.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    recieverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});


btnLoan.addEventListener('click', function(e) {
  e.preventDefault();

  const amount = Number (inputLoanAmount.value)
  if ( amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount)
  }
  inputLoanAmount.value = '';
})

btnClose.addEventListener('click', function(e){
  e.preventDefault();


  if (inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin) { 
    const index = accounts.findIndex(acc => acc.username === currentAccount.username);

    console.log(index);

  // .indexOf(23)
    


  // Delete Account
    accounts.splice(index, 1);


    //Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';

});
let sorted = false;
btnSort.addEventListener('click', function(e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted
});
// const firstWithdrawal = movements.find(mov => mov < 0)
// console.log(movements);
// console.log(firstWithdrawal);


// console.log(accounts);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account)










// CODE REVIEW
// for (const accounts of account){
//   if (accounts.owner === 'Jessica Davis'){
//     console.log(...accounts.owner)
//   }
// }













  
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




// console.log(movements);


// // EQUALITY
// console.log(movements.includes(-130));  //true


// // SOME: CONDITION

// console.log(movements.some(move => move === -130))    //true

// const anyDeposits = movements.some(mov => mov > 1500);  // true
// console.log(anyDeposits);


// // EVERY: CONDITION

// console.log(movements.every(mov => mov > 0))    // false
// console.log(account4.movements.every(mov => mov > 0)) //true

// // SEPARATE CALLBACK
// const deposit = mov => mov > 0;
// console.log(movements.some(deposit))
// console.log(movements.every(deposit))
// console.log(movements.filter(deposit))



// FLAT and FLAT MAP

// const arr = [[1, 2, 3], [4, 5, 6], 7 , 8];
// console.log(arr.flat())   //DEPTH

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat(2))    // DEPTH


// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);

// const allMovements = accountMovements.flat();
// console.log(allMovements);
// const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);

// const overalbalance = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overalbalance);

// const trueBalance = accounts.flatMap(acc => acc.movements).reduce((acc, mov) => acc + mov, 0);
// console.log(trueBalance)


// SORTING ARRAYS
// // strings
// const owners = ['Alex', 'Zach', 'Adam', 'Martha'];
// // console.log(owners.sort());
// console.log(owners)

// owners.sort((a, b) => {
//   if( a > b) return 1;
//   if( a < b) return -1;
// })

// // owners.sort((a, b) => a - b);
// console.log(owners)


// // numbers
// console.log(movements)


// return < 0 ? a, b (keep order)
// return > 0 ? b, a (switch order)

// Ascending
// movements.sort((a, b) => {
//   if(a > b) return 1;
//   if(a < b) return -1;
// });

// movements.sort((a, b) => a - b);
// console.log(movements)

// // Descending
// // movements.sort((a, b) => {
// //   if(a > b) return -1;
// //   if(a < b) return 1;
// // });

// movements.sort((a, b) => b - a);

// console.log(movements)


// // CHALLENGE 1



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

// // checkDogs()
// const checkDogs = function(dogsJulia, dogsKate) {
//   // const correctedDogsJulia = dogsJulia.slice(1,3);   is okay, but slice is also good
//   const correctedDogsJulia = dogsJulia.slice();
//   correctedDogsJulia.splice(0, 1);
//   // correctedDogsJulia.splice(-2);
//   // console.log(correctedDogsJulia)
//   const allDogs = correctedDogsJulia.concat(dogsKate)
//   // const allDogs= [...correctedDogsJulia, ...dogsKate]
//   // console.log(allDogs)
//   allDogs.forEach(function(dog, i) {
//     if (dog >= 3) {
//       console.log(`Dog number ${i + 1} is an adult 🦮, and is ${dog} year(s) old`)
//     } else {
//       console.log(`Dog number ${i + 1} is a puppy 🐶, and is ${dog} year(s) old`)
//     }
//   })
// };


// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3])
// // checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4])


// const calcAverageHumanAge = function(ages) {
//   const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//   console.log(humanAges)
//   const adults = humanAges.filter(age => age >= 18)
//   console.log(adults)

//   // const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
//   // console.log(`The average age is ${average}`)
//   const average = adults.reduce((acc, age, i, arr) => acc + age / arr.length , 0);
//   console.log(`The average age is ${average}`)
// }


// const average1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])
// const average2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])


// CHALLENGE 2
// const ages = [5, 2, 4, 1, 15, 8, 3]


// ages.forEach(function(age, i, arr){
//    if(age <= 2) {
//     console.log( `2 * ${i}`);
//   } else{
//     console.log( `16 + (${i} * 4)`);
//   }
// })
// console.log(ages)




// // OPTION 1
// const calcAverageHumanAge = function(ages) {
//   const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//   // console.log(humanAges)
//   const adults = humanAges.filter(age => age >= 18)
//   console.log(adults)
//   const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
//   return `The average age is ${average}`
// }
// const average1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])
// console.log(average1)


// const average2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])
// console.log(average2)






// // OPTION 2

// const calcAverageHumanAge1 = ages1 =>
//   ages1
//     .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter(age => age >= 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
// // return `The average age is ${average1}`;
// // RETURN is not necessary


// const average11 = calcAverageHumanAge1([5, 2, 4, 1, 15, 8, 3])
// const average22 = calcAverageHumanAge1([16, 6, 10, 5, 6, 1, 4])

// console.log(average11, average22)






















// LEETCODE

// const twoSum = (nums, target) => {
//   const result = [];
  
//   for (let i = 0; i < nums.length; i++) {
//       for(let j = i + 1; j < nums.length; j++) {
//           if(nums[i] + nums[j] === target) {
//               result.push(i);
//               result.push(j);
//           }
//       }
//   }
//   return result;
// };

// console.log(twoSum([2, 7, 11, 15], 9));



// Create a new array

// const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// // Empty arrays + fill method
// const x = new Array(7);
// console.log(x);
// // console.log(x.map(() => 5))
// // x.fill(1);

// x.fill(1, 3, 6);
// arr.fill(1, 0, 4);
// console.log(arr)

// console.log(x);

// arr.fill(23, 2, 6);
// console.log(arr);


// // Array.from
// const y = Array.from({length: 7}, () => 1);
// console.log(y);

// const z = Array.from({length: 7}, (_, i) => i + 1);
// console.log(z);

// const w = Array.from({length: 100}, (_, i) => i + 1);
// console.log(w);

// const movementsUI = Array.from(document.querySelectorAll('.movements__value'));
// console.log(movementsUI)


// labelBalance.addEventListener('click', function() {
//   const movementsUI = Array.from(document.querySelectorAll('.movements__value'), el => Number(el.textContent.replace('€', ''))
//   );

//   console.log(movementsUI);
//   const movementsUI2 = [...document.querySelectorAll('.movements__value')]
//   console.log(movementsUI2)
// });




// Practice Reduce nd filter 

// const free = Array.from({length: 11}, (_, i) => ++i);
// console.log(free)

// const sum = free.reduce((acc, num) => acc + num);
// console.log(sum)


// const big = Array.from({length: 1000}, (_, i) => i + 1)
// console.log(big)

// const ming = big.reduce((acc, num) => acc + num);
// console.log(ming)
// const even = big.filter((num) => num % 2 === 0);
// console.log(even)
// const besh = even.reduce((acc, num) => acc + num);
// console.log(besh)



// const num = [1, 2414, 4, 3232, 56, 7, 87];

// const findBig = function(arr) {
//   let max = arr[0];
//   for(let i = 0; i < arr.length; i++) {
//     const array = arr[i]
//     if(array > max) max = array;
//   } console.log(max)
// }
// findBig(num);











// 1.
// const banckDepositSum = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 0)
//   .reduce((acc, num) => acc + num, 0);

// console.log(banckDepositSum)




// const banckDepositSum1 = accounts.map(acc => acc.movements);
// console.log(banckDepositSum1)  //[Array(8), Array(8), Array(8), Array(5)]




// const banckDepositSum2 = accounts.map(acc => acc.movements).flat();
// console.log(banckDepositSum2); //[200, 450, -400, 3000, -650, -130, 70, 1300, 5000, 3400, -150, -790, -3210, -1000, 8500, -30, 200, -200, 340, -300, -20, 50, 400, -460, 430, 1000, 700, 50, 90]










// 2. 
  
  // const numDeposits1000 = accounts
  //   .flatMap(acc => acc.movements)
  //   // .reduce((acc, num) => acc + num, 0)
  //   // .reduce((count, cur) => (cur >= 1000 ? count + 1 : count) , 0);
  //   .reduce((count, cur) => (cur >= 1000 ? ++count : count) , 0);

  //   // .filter(mov => mov >= 1000).length;

  // console.log(numDeposits1000);

  // let a = 10;
  // console.log(++a)
  // console.log(a)











  //3. create an object
  // const { deps, withs } = accounts
  //   .flatMap(acc => acc.movements)
  //   .reduce(
  //     (sums, cur) => {
  //       // cur > 0 ? (sums.deps += cur) : (sums.withs += cur);
  //       sums[ cur > 0 ? 'deps' : 'withs'] += cur;
  //       return sums;
  //     },
  //     { deps: 0, withs: 0 }
  //   ); 

  //   console.log(deps, withs); // {deposits: 25180, withdrawals: -7340}




  // 4. 
  // this is a nice title => This Is a Nice Title
  const convertTitleCase = function (title) {
    const capitalize = str => str[0].toUpperCase() + str.slice(1);

    const exceptions = [
      'a',
      'an',
      'and',
      'the',
      'but',
      'or',
      'on',
      'in',
      'with',
    ];

    const titleCase = title
      .toLowerCase()
      .split(' ')
      .map(word =>
        (exceptions.includes(word) ? word : capitalize(word))
      )
      .join(' ');
    return capitalize(titleCase);
  };

  console.log(convertTitleCase('this is a nice title'));
  console.log(convertTitleCase('this is a LONG title, but not too long'));
  console.log(convertTitleCase('and here is another title with an EXAMPLE'))
  