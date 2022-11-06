

//Challenge 1
//     const calcAverage = (a, b, c) => (a + b + c) / 3;

//     //Test 1
//     let scoreDolphins = calcAverage(44, 23, 71);
//     let scoreKoalas = calcAverage (65, 54, 49)  ;
//     console.log(scoreDolphins, scoreKoalas);


//     const checkWinner = function(avgDolphins, avgKoalas) {

//     if(avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win ${avgDolphins} vs. ${avgKoalas}`);
//     } else if(avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas win ${avgKoalas} vs. ${avgDolphins}`);
//     }   else{
//         console.log('No team wins')
//     }
// }
//     checkWinner(scoreDolphins, scoreKoalas);

//     //Test 2
//     scoreDolphins = calcAverage(85, 54, 41);
//     scoreKoalas = calcAverage (23, 34, 27);
//     console.log(scoreDolphins, scoreKoalas);
//     checkWinner(scoreDolphins, scoreKoalas);


//      //Test 3
//      scoreDolphins = 444;
//      scoreKoalas = 999;
//      console.log(scoreDolphins, scoreKoalas);
//      checkWinner(scoreDolphins, scoreKoalas);










// Challenge #4







  
// const calcTip = function(bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }
// // const calcTip1 = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// const bills = [125, 555, 44];
// const tip = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
// const total = [bills[0] + tip[0], bills[1] + tip[1], bills[2] + tip[2]]
// console.log(bills, tip, total)

// const total1 = bills[2] + (bills[2] * 0.15) ;
// const total2 = bills[2] + (bills[2] * .2);
// const totalTip1 = bills[2] * 0.15;
// const totalTip2 = bills[2] * 0.2;


// const bills = [125, 555, 44];
// const tip = [bills[0] * 0.15, bills[1] * 0.2, bills[2] * 0.2]
// const total = [bills[0] + tip[0], bills[1] + tip[1], bills[2] + tip[2]]
// console.log(tip)
// console.log(total)

// const total1 = bills[2] + (bills[2] * 0.15) ;
// const total2 = bills[2] + (bills[2] * .2);
// const totalTip1 = bills[2] * 0.15;
// const totalTip2 = bills[2] * 0.2;


// let calcTip = function(totalBill) {
//     console.log(`the bill is ${totalBill}`)
// }
// calcTip = 200
// console.log(calcTip)

















// Challenge #3

// const mark = {
//     firstName: 'Mark',
//     lastName: 'Miller',
//     weight: 78,
//     height: 1.69,



//     calcBMI: function(){
//         this.bmi = this.weight / this.height ** 2;
//         return this.bmi
//     }
    
// }
// console.log(mark.calcBMI())


// const john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     weight: 92,
//     height: 1.95,

    
//     calcBMI: function(){
//         this.bmi = this.weight / this.height ** 2;
//         return this.bmi
//     }
// }
// console.log(john.calcBMI())


// if(mark.bmi > john.bmi) {
//     console.log(`${mark.firstName}'s BMI (${mark.calcBMI()}) is higher than ${john.firstName}'s (${john.calcBMI()})`)    
// }   else{
//     console.log(`${john.firstName}'s BMI (${john.calcBMI()}) is higher than ${mark.firstName}'s (${mark.calcBMI()})`)    
// }




// const calcTip = function(bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//  }

// const bills = [
//     22,
//     295,
//     176,
//     440,
//     37,
//     105,
//     10,
//     1100,
//     86,
//     52
// ];

// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//     const tip = calcTip(bills[i])
//     tips.push(tip);
//     totals.push(tip + bills[i])
// }
// console.log(bills, tips, totals)

// const calcAverage = function(arr) {
//     let sum = 0;
//     for( let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];
//         // sum += arr[i];
//     }
//     // console.log(sum)
//     return sum / arr.length;

// }
// // console.log(calcAverage([2, 3, 6]));
// console.log(calcAverage(totals));
// console.log(calcAverage(tips));
// console.log(calcAverage(bills));





//          REVIEW


// const markWeight = 78;
// const markHeight = 1.69;


// const johnWeight = 92;
// const johnHeight = 1.95;

// const markBMI = Math.floor(markWeight / markHeight ** 2)


// const johnBMI = Math.floor(johnWeight / johnHeight ** 2);


// if(markBMI > johnBMI) {
//     console.log(`Mark has higher BMI(${markBMI}) than John(${johnBMI})`)
// } else {
//     console.log(`John has higher BMI(${johnBMI} than Mark(${markBMI}))`)
// };

// let dolphins = [97, 162, 101]
// const dolphinsAverage = Math.floor((dolphins[0] + dolphins[1] + dolphins[2]) / 3);


// let koalas = [109, 95, 106]
// const koalasAverage = Math.floor((koalas[0] + koalas[1] + koalas[2]) / 3);



// if(dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
//     console.log(`Dolphins won!(${dolphinsAverage}), Koalas lost(${koalasAverage})`)
// } else if(koalasAverage > dolphinsAverage && koalasAverage >= 100) {
//     console.log(`Koalas won!(${koalasAverage})`)
// } else {
//     console.log(`There is no winner this time`)
// }



// const bill = 275;
// const tip = bill >= 50 && bill <= 300 ? bill * .15 : bill * .2;
// console.log(`The tip is $${tip}`)
// const totalBill = bill + tip
// console.log(`The total bill is $${totalBill}`);




// const calcAverage = (a, b, c) => (a + b + c) / 3

// const dolphinsScore = calcAverage(44, 23, 71);
// const koalasScore = calcAverage(620, 54, 49);
// console.log(dolphinsScore, koalasScore)

// const checkWinner = function (avgDolphins, avgKoalas) 
// {
//     if (avgDolphins >= 2 * avgKoalas) {
//             console.log(`Dolphins won! (${avgDolphins} vs ${avgKoalas})`);
//     } else if(avgKoalas >= 2 * avgDolphins) {
//             console.log(`Koalas won! (${avgKoalas} vs ${avgDolphins})`);
//     } else {
//         console.log(`There's no winner`);
// }
// }
// checkWinner(dolphinsScore, koalasScore);




// const calcTip = function(bill) {
//     return bill >= 50 && bill <= 300 ? bill * .15 : bill * .2;
// }

// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * .15 : bill * .2;

// const bills = [
//     125,
//     222,
//     44,
//     100,
// ]

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]), calcTip(bills[3])];
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2], bills[3] + tips[3]]
// console.log(total);


// console.log(bills, tips)

// const bills = [
//     22,
//     205,
//     176,
//     440,
//     37,
//     105,
//     10,
//     1100,
//     86,
//     52,
// ]
// const tips = [];
// const totals = [];

// for(let i = 0; i < bills.length; i++) {
//     tips.push(bills [i] > 50 && bills[i] < 300 ? bills[i] * .15 : bills[i] * .2)
//     totals.push(tips[i] + bills[i])
// }
// console.log(bills, tips, totals)


// const love = 'I LOVE YOU!';
// for (let i = 0; i < love.length; i++) {
//     console.log(love[i]);
// }

// const alex = [
//     'Alex',
//     'Kim',
//     2037 - 1995,
//     'teacher',
//     ['Tim', 'Peter', 'Nick'],
//     true,
//     false,
// ];
// const types = [];

// for (let i = 0; i <= 6; i++) {
//     //REading from alex array
//     console.log(alex[i], typeof alex[i]);

//     types[i] = typeof alex[i];

//     //filling types array
//     //types[i] = typeof alex
//     types.push(typeof alex[i]);
// }
// console.log(types);

// const years = [
//     1991,
//     2007,
//     1969,
//     2020,
// ]
// const ages = []

// for(let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);
// }
// console.log(ages)



const numbers = [12, 23, 43, 5423, 6346, 66,]

let numCheck = function(arr) {
  let max = arr[0];
  for( i = 0; i < arr.length; i++) {
  let array = arr[i];
  if(array > max) max = array;
  } console.log(max)
};
const check = numCheck(numbers)
