// Scope va context

// scope - variable   
// let a = 7;  // Third priority
// let b = 13;

// function hisoblash(a, b)
// function hisoblash(a) { // Second priority
//   const c = a + b;      // First priority
//   console.log(c);
// }

// hisoblash(7, 13);  // console: 20 // uses function data (a + b) (7)
// console.log(c)  // can't access function variable  //console: Uncaught ReferenceError

// hisoblash(12); // console: 25 // function can use external variables (Second priority)



//////////////////////////////////////////////////////////////////////////////////////

// context - object

const person1 = {
  ism: 'hamid',
  yosh: 29,
  millat: 'uzbek',
  salom_bering(){
    console.log('assalomu alaykum');
  },
  hayrlashing() {
    console.log('salomat boling');
  },
  tonishtiring() {
    // function get_ism() {    // console. undefined   // COMPARE WITH line 42
    //   const name = person1.ism; // 'this' refers to get_ism function(35)
    //   console.log(name);      // this cannot work with functions. Only with objects
    // }
    
    const action = () => {  // can work because arrow function doesn't mutate the values of 'this'
      console.log(this);  // REFERS TO the 'person' object
      const name = this.ism;  
      console.log(name);  // console: "mening ismim hamid va mening millatim uzbek"
    }
    // action()
    // get_ism();    // console: undefined
    console.log(`mening ismim ${this.ism} va mening millatim ${this.millat}`);
  } // this refers to 'person' object
};

console.log(person1.tonishtiring());  //console: "mening ismim hamid va mening millatim uzbek"


// oddiy, anonim, arrow

// !!!IMPORTANT. oddiy and anonim functions attaches(mutate) the value of 'this' to themselves(functions).

// !!!IMPORTANT. Arrow functions don't affect the original value of 'this' keyword.




let olma = 270;

//  && = if both are true => true
//  || = if either is true => true
//  ?? = returns the RIGHT side operand if the LEFT-side operand is:
// 1. NULL
// 2. UNDEFINED
// 3. 0 
// 4. ''    empty string




// if deploy
if(olma >= 200) {
  console.log(`olamalaringiz 200dan kam emas`)
} else if(olma >= 150 && olma < 200) {
  console.log('olmalaringiz soni 150 va 200 oralidiga')
} else{
  console.log('olmalaringiz soni 150da kam')
}


class Plastic {
  constructor(account, owner, amount, expDate) {
    this.account = account;
    this.owner = owner;
    this.amount = amount;
    this.expDate = expDate;
  }
  
  withdrawal(a){
    if(a <= this.amount){
      console.log(`Withdrawing: ${a} `)
    this.amount = this.amount - a;
  } else{
    console.log(`You don't have enough funds`)
  }
  }
  balance(){
    console.log(`Your balance is $${this.amount}`);
  }
}

const card = new Plastic(123456789, 'Alex', 120_000, '11.05.2026');
card.balance();

// operatsiyalar

// uy sotib olish

card.withdrawal(100_000);
card.balance();

// mashina olish
card.withdrawal(25_000)
card.balance();



///////////////////////////////////////////////////////////////////////////////////////////////////

// if

let x = 15;

if(x > 50) {
  console.log('More than 50')
} else if(x > 20) {
  console.log('More than 20, less than 50')
} else{
  console.log('Less than 20')
}






// Switch

let goods = 'book';   // "give it back"

switch(goods) {
  case 'notebook':
    console.log('put on shelf');
    break;              // stops the process if true
  case 'book':
    console.log('give it back');
    break;
  case 'money' :
    console.log('keep it');
    break;              
  default:             // if no case is true
    console.log('life is good');
    break    
}


///!!! IMPORTANT
// Switch compares the value of the variable with the cases, and returns the one that is true;

// Default returns its value when no case is true;




// forEach = executes the given function on every element on the given array
const numbers = [1, 2, 3, 4, 5, 6, 7, 35, 33, 12]

// numbers.forEach((item, index, array) => {
//   console.log(`a [${index}] = ${item}`)
//   console.log(array)
// });

const summary = numbers.reduce((acc, sum) => acc + sum)
console.log(summary)


const num = [1, 2, 3, 4, 5, 6,]
 let sum = 0;

 num.forEach((item) => sum += item)

 console.log(sum)



 const letters = [ 'f', 'a', 'b', 'a', 'c', 'b', 'a', 'd', 'c', 'd']

 let count = {};

 letters.forEach(item => {
  if(count[item]) {
    count[item]++
  } else {
    count[item] = 1
  }
  });
 
  console.log(count)





  // const word = function countLetter(letter, string) {
  //   let num = 0
  //   for(let i = 0; i < string.length; i++) {
  //     if(string.charAt(i) === letter) {
  //       num += 1
  //     }
  //   }
  //   return num;
  // }
  
  // console.log(word('s', 'subconsciousness'));
  

  
  
  




  const tilak = function countLetter(letter, string) {
    let num = 0
    for(let i = 0; i < string.length; i++) {
      if(string.charAt(i) === letter) num += 1;
    }
    return num;
  }
  
  console.log(tilak('a', 'hammamizga_bir_tonna_sabr_tilayman'));
  

  const tilak2 = (letter, string) => {
    let num = 0
    for(let i = 0; i < string.length; i++) {
      if(string.charAt(i) === letter) num += 1;
    }
    return num;
  }
  
  console.log(`Arrow function: ${tilak2('a', 'arrow_function_bilan_yosalgan_usuli')}`);



  function countLetter(letter, string) {
    let num = 0
    for(let i = 0; i < string.length; i++) {
      if(string.charAt(i) === letter) num += 1;
    }
    return num;
  }
  
  console.log(`javob: ${countLetter('a', 'hammamizga_bir_tonna_sabr_tilayman')}`); //7



  let arr1=[-3,8,7,6,5,-4,3,2,1];
  arr1.sort((a, b) => a -b);
  console.log(arr1)






  // var mainStr = "str1,str2,str3,str4";
  console.log(("str1,str2,str3,str4".match(/,/g) || []).length); //logs 3


  ("this is foo bar".match(/o/g)||[]).length;



//   let str = "development"
//   str
//     .split('')
//     .map(function (e, i) {
//       if (e === 'e') return i;
//     })
//     .filter(Boolean)
//     [(9, 10)]
//     .length;
//   // returns 2

// console.log(str)

String.prototype.count= function(word) { 
  let letterNum = 0;

  for(i = 0; i < this.length; i++)
  if(this[i]===word)letterNum++;

  return letterNum;
};
usage:

console.log("strings".count("s")); //2






///////////////////////////////////////////////////////////////////////////
// Manual input without functions  
let string = 'development'            
  
let numLet = (string.match(/e/g).length);

console.log(`Array match method: ${numLet}`)

//5.
const letterNum = string.split('e').length - 1
console.log(`Array split method: ${letterNum}`)

// 6. 
const letterE = [...string].filter(letter => letter === 'e').length;
console.log(`Array filter method: ${letterE}`);

// 7. 
const eLetter = [...string].reduce((total, letter) => letter === 'e' ? total + 1 : total, 0);

console.log(eLetter);




  let someE = string.split('');
  let arr = []

  someE.forEach(e => arr[e] ? arr[e]++ : arr[e] = 1)
//  if(arr[e]) {
//   arr[e]++
//  }else {
//   arr[e] = 1
//  }
// }) 

console.log(arr)


function countLetter(str) {
  let lettere = str.split('');
  let arr = [0]

lettere.forEach(e => arr[e] = (arr[e] || 0) + 1) 
  return arr;
}

console.log(countLetter(string))