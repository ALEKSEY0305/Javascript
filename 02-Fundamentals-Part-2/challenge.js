

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