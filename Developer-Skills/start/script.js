// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const temperatures = [
//     3,
//     -2,
//     -6,
//     -1,
//     'error',
//     9,
//     13,
//     17,
//     15,
//     14,
//     9,
//     5,
// ];



// 1) understanding the problem
// - what is the temperatures amplitude? Answer: difference between highest and the lowest temp
// How to compute max and min temp?
// What's a sensor? What to do?


// 2) Breaking up into sub-problems
// How to ignire errors?
//Find max value in temp array
// Find min value
//Subtract min from max and return it

// const calcTempAmplitude = function (temps) {
//     let max = temps[0];
//     let min = temps[0];
//         for (let i = 0; i < temps.length; i++) {
//         const curTemp = temps[i];
//         if(typeof curTemp !== 'number') continue;

//         if (curTemp > max) max = curTemp;
//         if (curTemp < min) min = curTemp;
//     }
//     console.log(max, min);
//     return max - min;
// }
// const amplitudde = calcTempAmplitude(temperatures)
// console.log(amplitudde);

// // Problem 2
// //Function should recieve 2 arrays of temp

// // Understanding the problem
// // -With 2 arrays, should we implement functionality twice? NO! Just merge two arrays
// // Merge 2 arrays?

// const calcTempAmplitudeNew = function (t1, t2) {

//     const temps = t1.concat(t2)
//     console.log(temps)

//     let max = temps[0];
//     let min = temps[0];
//         for (let i = 0; i < temps.length; i++) {
//         const curTemp = temps[i];
//         if(typeof curTemp !== 'number') continue;

//         if (curTemp > max) max = curTemp;
//         if (curTemp < min) min = curTemp;
//     }
//     console.log(max, min);
//     return max - min;
// }
// const amplitudeNew = calcTempAmplitudeNew(temperatures)
// console.log(amplitudeNew);

// expected output: Array ["a", "b", "c", "d", "e", "f"]




// const measureKelvin = function() {
//     const measurement = {
//         type: 'temp',
//         unit: 'celsius',
//         // value: Number(prompt('Degrees celsius:')),
//         value: 10,
//     }


//     //find bug
//     console.log(measurement.value);
//     console.table(measurement);
//     // console.warn(measurement.value);
//     // console.error(measurement.value);
//     const kelvin = measurement.value + 273;
//     return kelvin;
// }
// console.log(measureKelvin())


// // Using a debugger
// const calcTempAmplitudeBug = function (t1, t2) {

//     const temps = t1.concat(t2)
//     console.log(temps)

//     let max = temps[0];
//     let min = temps[0];
//         for (let i = 0; i < temps.length; i++) {
//         const curTemp = temps[i];
//         if(typeof curTemp !== 'number') continue;
//         // debugger;
//         if (curTemp > max) max = curTemp;
//         if (curTemp < min) min = curTemp;
//     }
//     console.log(max, min);
//     return max - min;
// }
// const amplitudeBug = calcTempAmplitudeBug(temperatures)
// console.log(amplitudeBug);

// const data1 = [
//     17, 
//     21,
//     23, 
    
// ];

// const data2 = [
//     12,
//     5,
//     -5,
//     0,
//     4,       
// ];
// console.log(`...${data1[0]}C ... ${data1[1]}C ... ${data1[2]}C ...`);

// const printForecast = function(arr) {
//     let str = '';
//     for(let i = 0; i < arr.length; i++){
//         // str = str + `${arr[i]}C in ${i + 1} days ... `
//         str += `${arr[i]}C in ${i + 1} days ... `
//     }
//     console.log(`...${str}`)
// }
// printForecast(data1)
// // console.log(maxTemp)
// const printForecast = function(){
//    if(maxTemp[0]) {
//     console.log(`...${maxTemp[0]}C in one day`)
//    } else if(maxTemp[0]) {
//     console.log(`...${maxTemp[1]}C in two days`)
//    } else if(maxTemp[2]) {
//     console.log(`...${maxTemp[2]}C in one day`)
//    } else if(maxTemp[3]) {
//     console.log(`...${maxTemp[3]}C in one day`)
//    } else if(maxTemp[4]) {
//     console.log(`...${maxTemp[4]}C in one day`)
//    } else {`No more forecast `}
// }; 
// console.log(printForecast())


// const bigNum = [
//     22,
//     3,
//     -3,
//     4,
//     13,
//     123,
//     4424,
//     2,
//     -13,
// ]
// const biggest = function (num) {
//     let max = num[0];
//     // let min = num[0];
//         for( let i = 0; i < num.length; i++) {
//         const word = num[i];
//             if (word > max) max = word;
//             // if (word < min) min = word;
//     } 
//     console.log(max);
// }
// const done = biggest(bigNum)




// const practice = [ 10, 22, 314, 124213, 2, -12 , 152, -9893, 5,]

// const coolNum = function(thisNumber) {
//     let biggestNum = thisNumber[0]
//         for(let i = 0; i < thisNumber.length; i++) {
//         const giant = thisNumber[i];
//             if( giant > biggestNum) biggestNum = giant;
//     }
//     console.log(biggestNum);
// }
// const answer = coolNum(practice);



// const number = [ 12, 22, 31, 1, 22, -32, 3321, 3,]

// const big = function(arr) {
//     let max = arr[0]
//     for( let i = 0; i < arr.length; i++){
//     const check = arr[i];
//         if(check > max) max = check;
// } console.log(max);
// }
// const maxNumber = big(number)



// const findMax = [22, 454, -23, 312, 443, 2, -34, -12, 44, -827,]

// const lastPractice = function(arrow) {
//     let maximum = arrow[0]
//     for(let i = 0; i < arrow.length; i++) {
//         const ifNum = arrow[i] 
//         if(ifNum > maximum) maximum = ifNum;
//     } console.log(maximum);
// }
// const checkResult = lastPractice(findMax)



// const loopPrac = [ 2, 0, 12, 231, 1, -32, -944, 2933,]

// const coolFunc = function(arrowLoop){
//     let maxmax = arrowLoop[0];
//     for(let i = 0; i < arrowLoop.length; i++) {
//         let nextNum = arrowLoop[i]
//         if(nextNum > maxmax) maxmax = nextNum
//     } console.log(maxmax)
// }
// const reallyLast = coolFunc(loopPrac)



// const chislo = [ 1, 222, -432, 12, 23394, -101, 104, -339, 441, -893, 93, 121,]

// const rabotay = function(arr){
//     let maxChislo = arr[0];
//     let minChislo = arr[0];
//     for( let i = 0; i < arr.length; i++) {
//         const ustal = arr[i]
//         if(ustal > maxChislo) maxChislo = ustal
//         if(ustal < minChislo) minChislo = ustal
// } console.log(minChislo, maxChislo)
// }
// const konets = rabotay(chislo)


















// const findMax = [ 1, 23, 332, 123, 441233, 33231, 1,]

// const findFunc = function(arrow){
//     let maxNum = arrow[0];
//     for( let i = 0; i < arrow.length; i++){
//     const nextNum = arrow[i];
//     if(nextNum > maxNum) maxNum = nextNum
// } console.log(maxNum);
// }
// const arrCheck = findFunc(findMax)















































// const findMaxNum = [ 1, 223, 221, 944, 10, 827 , -12, 213454, -5324, 3341, 2,]

// const thisFunc = function(arr) {
//     let maxNum = arr[0];
//     let minNum = arr[0];
//     for( let i = 0; i < arr.length; i++){
//         const condition = arr[i]
//         if(condition > maxNum) maxNum = condition
//         if(condition < minNum) minNum = condition
//     } console.log(minNum, maxNum)
// }
// const funcCheck = thisFunc(findMaxNum)

// const numbers = [23, 2334, 53, 5465, 774453,]

// const numFunc = function(arr) {
//     let max = arr[0]
//     let min = arr[0]
//     for(let i = 0; i < arr.length; i++) {
//         const array = arr[i];
//         if(array > max) max = array
//         if(array < min) min = array
//     } console.log(min, max)
// }
// const result = numFunc(numbers)






// const randomNum = [12, 244, 214, -213, 512, -745, 866, -985, 1, 4563, -6987934, 35, 5, 6, -9786];

// const biggestNum = function(arr) {
//     let max = arr[0]
//     let min = arr[0]
//     for( let i = 0; i < arr.length; i++) {
//         const array = arr[i];
//         if(array > max) max = array
//         if(array < min) min = array
//     }console.log(min, max)
// }
// const check = biggestNum(randomNum);